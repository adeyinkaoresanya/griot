const router = require("express").Router();
const blog = require("../models/blogModel");

router.get("/", async (req, res) => {
    const allBlogs = await blog.find();
    res.render("index", { blogs: allBlogs });
  });
  
  module.exports = router;