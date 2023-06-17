function numUniqueEmails(emails) {
  const set = new Set();

  for (const email of emails) {
    let [localName, domain] = email.split("@");
    localName = localName.replaceAll(".", "");

    const plusIdx = localName.indexOf("+");
    if (plusIdx !== -1) localName = localName.substring(0, plusIdx);

    if (!set.has(localName + "@" + domain)) {
      set.add(localName + "@" + domain);
    }
  }

  return set.size;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.email.leet+alex@code.com",
  ])
);
