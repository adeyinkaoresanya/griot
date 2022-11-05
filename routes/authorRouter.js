const router = require("express").Router();
const blog = require("../models/blogModel");

router.get("/author", async (req, res) => {
  const allBlogs = await blog.find().populate('author').exec();
  // res.json({ blogs: allBlogs });
 res.render("authorBlogs", { blogs: allBlogs });
});
  module.exports = router;