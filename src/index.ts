import fs from "fs/promises";

const days = await fs.readdir("./dist/days");
console.log({ days });

export default days as String[];
