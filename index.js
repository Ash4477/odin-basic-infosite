import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  let filePath;

  if (req.url === "/") {
    filePath = "./pages/index.html";
  } else if (req.url == "/contact-me") {
    filePath = "./pages/contact-me.html";
  } else if (req.url == "/about") {
    filePath = "./pages/about.html";
  } else {
    filePath = "./pages/404.html";
  }

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Something went wrong :<");
    }

    if (filePath === "./pages/404.html") {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end(data);
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server is listening...");
});
