const router = require("express").Router();
const Blog = require("../models/blogModel");

router
  .get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    const getABlog = await Blog.findOne({ _id: id }).populate('author').exec();
    
    res.render("specificBlog", { blog: getABlog });
  })


  .get("/delete/:id", (req, res) => {
    const { id } = req.params;
    Blog.deleteOne({ _id: id })
      .then(() => {
        console.log("Blog has been deleted!");
        res.redirect("/user");
      })
      .catch((err) => console.log(err));
  })

  .get("/edit/:id", async (req, res) => {
    const { id } = req.params;

    const getData = await Blog.findOne({ _id: id });
    res.render("editBlog", { blog: getData });
  })

  
  .put("/edit/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, content } = req.body;

    updatedBlog= Blog.updateOne({ _id: id }, { title, description, content })
      .then(() => {
        res.redirect("/user");
      })
      .catch((err) => console.log(err));
  });

  



  module.exports = router;