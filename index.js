import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "pages", "index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({ msg: "error occurred!" });
    }
  });
});
app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "pages", "about.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({ msg: "error occurred!" });
    }
  });
});
app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "pages", "contact-me.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({ msg: "error occurred!" });
    }
  });
});
app.get(/.*/, (req, res) => {
  const filePath = path.join(__dirname, "pages", "404.html");
  res.status(404).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).json({ msg: "error occurred!" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
