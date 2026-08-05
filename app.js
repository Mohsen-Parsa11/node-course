const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRouter");

const app = express();

app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://Mohsen-Parsa:mohsen123@cluster0.prq0nsa.mongodb.net/";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(blogRouter);
app.use(morgan("tiny"));

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blog/new-blog", (req, res) => {
  res.render("blog/new-blog", { title: "New Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});
