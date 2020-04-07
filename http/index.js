const http = require("http");
const fs = require("fs");
const url = require("url");
const replaceTemplate = require("./modules/remplaceTemplate");
//we use synchronous because we don't need to readfile every request

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8",
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8",
);
const tempCard = fs.readFileSync(`${__dirname}/templates/Card.html`, "utf-8");

const data = fs.readFileSync("../data/data.json", "utf-8");

const dataObj = JSON.parse(data);
//create a server
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  //overview
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace(`{%PRODUCT_CARDS%}`, cardHtml);
    res.end(output);
    //product
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
    //api
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
    //not found
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});
//listen server
server.listen(5000, "127.0.0.1", () => {
  console.log("server started on port 5000");
});
