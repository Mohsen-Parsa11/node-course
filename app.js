const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

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

app.use(morgan("tiny"));

// post method
app.post("/blogs", (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

// adding blog
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog 4",
    snippet: "about new blog",
    body: "this is the body of the blog",
  });

  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// get all blogs
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// get single blog
app.get("/single-blog", (req, res) => {
  Blog.findById("6a6ae827678bfec03cc6dcca")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// delete single blog
app.get("/d-single-blog", (req, res) => {
  Blog.findByIdAndDelete("6a6aec9bc75f78475e83882c")
    .then((result) => {
      if (result) {
        res.send(`Document deleted ${result}`);
      } else {
        res.send("Document not found");
      }
    })
    .catch((err) => console.log(err));
});

// delete all blogs
app.get("/d-all-blogs", (req, res) => {
  Blog.deleteMany({})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
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
