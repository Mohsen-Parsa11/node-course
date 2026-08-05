const express = require("express");
const Blog = require("../models/blog");
const blogRouter = express.Router();

blogRouter.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

blogRouter.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete all blogs
blogRouter.get("/d-all-blogs", (req, res) => {
  Blog.deleteMany({})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

blogRouter.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

// post method
blogRouter.post("/blogs", (req, res) => {
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
blogRouter.get("/add-blog", (req, res) => {
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
blogRouter.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// get single blog
blogRouter.get("/single-blog", (req, res) => {
  Blog.findById("6a6ae827678bfec03cc6dcca")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// delete single blog
blogRouter.get("/d-single-blog", (req, res) => {
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

module.exports = blogRouter;
