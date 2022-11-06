const router = require("express").Router();
const Blog = require("../models/Blog");

router
  .get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    const getABlog = await Blog.findOne({ _id: id });

    res.render("specificBlog", { blog: getABlog });
  })

  