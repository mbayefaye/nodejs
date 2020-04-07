/**ASynchronous:each statement is processed one after another line by line*/
/**ASynchronous = non blocking  */
/**callbacks ≠ Asynchronous */
/**callback hell : multiple callbacks */
const fs = require("fs");

fs.readFile("./start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./final.txt", "utf-8", (err, data) => {
      console.log(data);
      fs.writeFile("./output.text", `${data2}\n ${data}`, "utf-8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("write succesfully");
        }
      });
    });
  });
});
