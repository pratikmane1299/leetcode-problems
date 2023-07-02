import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import { Redis } from "@upstash/redis";
import chalk from "chalk";

const redis = Redis.fromEnv();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

const folderPath = __dirname + "/problems";

const excludedFiles = [".DS_Store"];
const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";

const TAGS_REDIS_KEY = "TAGS";
const DIFFICULTIES_REDIS_KEY = "DIFFICULTIES";

const questionTitleQuery = `
	query questionTitle($titleSlug: String!) {
		question(titleSlug: $titleSlug) {
			questionId
			questionFrontendId
			title
			titleSlug
			difficulty
		}
} 
`;

const questionTagsQuery = `query singleQuestionTopicTags($titleSlug: String!) {
	question(titleSlug: $titleSlug) {
		topicTags {
			name
			slug
		}
	}
}`;

const questionContentQuery = `query questionContent($titleSlug: String!) {
	question(titleSlug: $titleSlug) {
		content
		mysqlSchemas
	}
}
`;

const isFile = async (fileName) => {
  const data = await fs.lstat(fileName);
  return data.isFile();
};

// function extractQuestionMeta(data) {
//   console.log(/\s*\@title\:(.*)$/gim.exec(data)[1]);
//   console.log(/\s*\@tags\:(.*)$/gim.exec(data)[1]);
//   // console.log(/\/*(.*)*\/$/.exec(data));
// }

async function getQuestionDetailsFromLeetcode(slug) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  const data = await (
    await fetch(LEETCODE_API_ENDPOINT, {
      ...options,
      body: JSON.stringify({
        query: questionTitleQuery,
        variables: { titleSlug: slug, operationName: "questionTitle" },
      }),
    })
  ).json();

  const tags = await (
    await fetch(LEETCODE_API_ENDPOINT, {
      ...options,
      body: JSON.stringify({
        query: questionTagsQuery,
        variables: {
          titleSlug: slug,
          operationName: "singleQuestionTopicTags",
        },
      }),
    })
  ).json();

  const content = await (
    await fetch(LEETCODE_API_ENDPOINT, {
      ...options,
      body: JSON.stringify({
        query: questionContentQuery,
        variables: {
          titleSlug: slug,
          operationName: "singleQuestionTopicTags",
        },
      }),
    })
  ).json();

  if (data && tags && content) {
    return {
      question: data?.data?.question,
      tags: tags?.data?.question?.topicTags,
      content: content?.data?.question?.content,
    };
  }

  return null;
}

function getQuestionDetails(question) {
  const splitArr = question.split(".")[0].split("-");

  const number = splitArr[0];
  const slug = splitArr.slice(1).join("-");

  return { slug, number };
}

async function findOrCreateDifficultyLevel(level) {
  console.log(chalk.yellow("searching for difficulty - ", level));
  let difficultyLevel = await prisma.difficulty.findUnique({
    select: {
      id: true,
      level: true,
    },
    where: {
      level: level.trim(),
    },
  });

  if (difficultyLevel === null) {
    console.log(
      chalk.red("difficulty level not found so creating instead - ", level)
    );
    difficultyLevel = await prisma.difficulty.create({
      data: {
        level: level.trim(),
        slug: level.toLowerCase().replace(/ /gi, "-"),
      },
    });
    console.log(chalk.green("difficulty level created - ", level));
  }

  console.log(chalk.green("difficulty level found - ", level));

  return difficultyLevel;
}

async function findOrCreateQuestion(question) {
  console.log(chalk.yellow("searching for question - ", question.slug));
  let quest = await prisma.question.findFirst({
    where: { slug: question.slug },
    select: { id: true },
  });

  if (quest === null) {
    console.log(
      chalk.red("question not found so creating instead - ", question.slug)
    );
    quest = await prisma.question.create({ data: question });
    console.log(chalk.green("question added - ", question.slug));
  }
  console.log(chalk.green("question found - ", question.slug));

  return quest;
}

async function findOrCreateTag(tag) {
  console.log(chalk.yellow("searching for tag - ", tag.slug));
  let tagFound = await prisma.tag.findFirst({
    where: { slug: tag.slug },
    select: { id: true },
  });

  if (tagFound === null) {
    console.log(chalk.red("tag not found so creating instead - ", tag.slug));
    tagFound = await prisma.tag.create({ data: tag });
    console.log(chalk.green("tag added - ", tag.slug));
  }

  console.log(chalk.green("tag found - ", tag.slug));

  return tagFound;
}

async function cacheAllTags() {
  await redis.del(TAGS_REDIS_KEY);

  const tags = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });

  await redis.set(TAGS_REDIS_KEY, JSON.stringify(tags));
}

async function cacheAllDificulties() {
  await redis.del(DIFFICULTIES_REDIS_KEY);

  const difficulties = await prisma.difficulty.findMany({
    select: {
      id: true,
      level: true,
      slug: true,
    },
  });

  await redis.set(DIFFICULTIES_REDIS_KEY, difficulties);
}

async function readFolder() {
  try {
    console.log(chalk.yellow.bold("-------start-------"));
    const files = await fs.readdir(`${folderPath}`, {
      encoding: "utf8",
    });

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!excludedFiles.includes(file)) {
        const filePath = folderPath + "/" + file;
        const code = await fs.readFile(filePath, { encoding: "utf8" });

        const { slug, number } = getQuestionDetails(file);

        if (slug) {
          console.log(chalk.blue("Begin: Search for slug in redis"));
          let questionDetails = await redis.get(slug);

          if (questionDetails === null) {
            console.log(chalk.blue("slug not found in redis"));
            console.log(chalk.yellow("Begin: fetching data from leetcode api"));

            questionDetails = await getQuestionDetailsFromLeetcode(slug);
            await redis.set(slug, JSON.stringify(questionDetails));

            console.log(chalk.blue("slug saved in redis"));
            console.log(chalk.green("End: fetching data from leetcode api"));
          } else {
            console.log(chalk.blue("End: slug found in redis"));
          }
          if (questionDetails) {
            console.log(
              chalk.yellow(
                "----------------Db operations start----------------"
              )
            );

            console.log(chalk.yellow("-------Begin: difficulty-------"));
            const difficulty = await findOrCreateDifficultyLevel(
              questionDetails.question.difficulty
            );
            console.log(chalk.yellow("-------End: difficulty-------"));

            console.log(chalk.yellow("-------Begin: Tags-------"));
            const tags = [];

            for (let j = 0; j < questionDetails.tags.length; j++) {
              const tag = await findOrCreateTag(questionDetails.tags[j]);
              tags.push(tag);
            }
            console.log(chalk.yellow("-------End: Tags-------"));

            console.log(chalk.yellow("-------Begin: Questions-------"));
            const question = await findOrCreateQuestion({
              title: questionDetails.question.title,
              description: questionDetails.content,
              number: +number,
              slug: questionDetails.question.titleSlug,
              code,
              difficultyId: difficulty.id,
              tags: {
                create: tags.map(({ id }) => ({
                  tag: {
                    connect: {
                      id,
                    },
                  },
                })),
              },
            });
            console.log(chalk.yellow("-------End: Questions-------"));
            console.log(
              chalk.yellow("----------------Db operations end----------------")
            );
          }
        }
      }
    }

    console.log(chalk.yellow.bold("Begin: caching tags & difficulties"));

    await Promise.all([cacheAllTags(), cacheAllDificulties()]);

    console.log(chalk.yellow.bold("End: caching tags & difficulties"));

    console.log(chalk.yellow.bold("-------end-------"));
  } catch (error) {
    console.log(error);
  }
}

async function run() {
  readFolder();
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
