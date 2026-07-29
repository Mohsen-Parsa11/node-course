const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://Mohsen-Parsa:mohsen123@cluster0.prq0nsa.mongodb.net/";

mongoose
  .connect(dbURI)
  .then(app.listen(3000))
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blog/new-blog", (req, res) => {
  res.render("blog/new-blog", { title: "New Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});
