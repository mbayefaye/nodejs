/**Synchronous:each statement is processed one after another line by line*/
/**Synchronous = blocking  */
/**Blockin ,synchrounous way*/
const fs = require("fs");
//read text
const textIn = fs.readFileSync("./text/input.txt", "utf-8");
//write text
const textOut = `This is what we know about mbaye:${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./text/ouput.txt", textOut);
console.log("file written");
