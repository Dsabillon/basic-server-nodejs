var http = require("http");
var fs = require("fs");
const url = require("url");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/about") {
      fs.readFile("about.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("contact-me.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(8080, () => console.log("Server running on port 8080"));
