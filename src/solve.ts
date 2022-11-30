// import fs from "fs/promises";

const DAY_PATTERN = /(\d+)(a|b)/;

const HAS_ARG_FOR_DAY = process.argv.length < 3;
const DAY_PATTERN_MATCHES = !process.argv[2]?.match(DAY_PATTERN);

console.log({ HAS_ARG_FOR_DAY, DAY_PATTERN_MATCHES });

if (HAS_ARG_FOR_DAY || DAY_PATTERN_MATCHES) {
  console.log("There is no day to resolve today, Resolving the latest one");
  const folders = await import("day/1/index.js");
  console.log(folders);
}
