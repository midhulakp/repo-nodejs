// // import http from "http";

// // let server = http.createServer((request, response) => {
// //   response.end("hello world");
// // });

// // server.listen(5000, (err) => {
// //   if (err) console.log(err);
// //   console.log("server is running on port 5000");
// // });

// import http from "http";

// let server = http.createServer((request, response) => {
//   //   console.log(request.url);
//   //   response.end(request.url);
//   //   response.end(request.method);
//   if (request.url === "/" || request.url === "/home") {
//     // response.statusCode = 200;
//     // response.statusMessage = "okay";
//     // response.setHeader("content-type", "text/html");
//     // response.end("<h1>Home Page</h1>");
//     response.writeHead(200, "okay", {
//       "content-type": "text/html",
//       "X-user": "midhula",
//     });
//     response.end("<h1>Home Page</h1>");
//   } else {
//     response.statusCode = 400;
//     response.statusMessage = "Page not found";
//     response.setHeader("content-type", "text/html");
//     response.end("<h1>PAGE NOT FOUND</h1>");
//   }
// });

// server.listen(5000, (err) => {
//   if (err) console.log(err);
//   console.log("server is running on port 5000");
// });

import http from "http";
import fs from "fs";
import { parse } from "querystring";
import { MongoClient } from "mongodb";
let server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      let body = "";
      //data event
      req.on("data", (chunk) => {
        body += chunk;
      });
      //end event to end req-res cycle
      req.on("end", async () => {
        let parseBody = parse(body);
        let client = new MongoClient("mongodb://127.0.0.1:27017");
        let db = await client.db("contactDB");
        let collecton = await db.createCollection("contacts");
        await collecton.insertOne(parseBody);
        res.end(
          '<h1 style="text-align:center;margin-top:2em">Thank you for contacting us</h1>'
        );
      });
    } else {
      res.end(null);
    }
  } else {
    if (req.url === "/" || req.url === "/home") {
      res.writeHead("200", "okay", { "content-type": "text/html" });
      let html = fs.readFileSync("./index.html", "utf-8");
      res.end(html);
    } else if (req.url === "/style") {
      res.writeHead("200", "okay", { "content-type": "text/css" });
      let css = fs.readFileSync("./style.css", "utf-8");
      res.end(css);
    } else if (req.url === "/image") {
      res.writeHead("200", "okay", { "content-type": "image/jpg" });
      let image = fs.readFileSync("./sunset.jpg");
      res.end(image);
    } else if (req.url === "/contact") {
      res.writeHead("200", "okay", { "content-type": "text/html" });
      let image = fs.readFileSync("./contact.html");
      res.end(image);
    } else {
      res.writeHead("404", "not found", { "content-type": "text/html" });
      let html = fs.readFileSync("./pnf.html", "utf-8");
      res.end(html);
    }
  }
});

server.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("server is running on port 5000");
});
