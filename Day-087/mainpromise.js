import fs from "fs/promises"

console.log("Starting..");
let a = await fs.readFile("rohan.txt")

let b = await fs.appendFile("rohan.txt","\n\n\n\n and this is amazing promise");
console.log(a.toString());

console.log("Ending...");
