/*
  Warnings:

  - A unique constraint covering the columns `[level]` on the table `Difficulty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Difficulty_level_key" ON "Difficulty"("level");
