/**In this module i going to show you how to
 * read or write external file using node js
 */
/**fs:file system is module of nodejs*/
const fs = require("fs");
//read text
const textIn = fs.readFileSync("./text/input.txt", "utf-8");
//write text
const textOut = `This is what we know about mbaye:${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./text/ouput.txt", textOut);
console.log("file written");
