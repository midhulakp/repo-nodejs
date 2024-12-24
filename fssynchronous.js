// FILE SYSTEM

//FS MODULE

import fs from "fs";

// SYNCHRONOUS CODE / BLOCKING CODE

let data = fs.readFileSync("./some.txt", "utf-8");
console.log(data);

fs.writeFileSync("./text.txt", "good morning");

fs.appendFileSync("./some.txt", "\n it a great time");

// fs.unlinkSync("./some.txt");
