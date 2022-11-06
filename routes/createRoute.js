const express = require('express');
const blogModel = require("../models/blogModel");

const router = express.Router();




router.get("/write", (req, res) => {
    res.render("createBlog");
  })


router.post("/write", (req, res) => {
    const { title, description, content, submit } = req.body;
    
    const author = req.user._id;
    let state;

    if (!title || !description || !content)
      return res.send("You have not finished writing. Some details are missing!");

    if (submit === "Publish"){
      state= "published"
      }
        console.log(state)
    
    
      
    const newBlog = new blogModel({ title, description, content, author, state });

    newBlog
      .save()
      .then(() => {
        console.log("Blog Saved Successfully!");
        res.redirect("/user");
      })
      .catch((err) => console.log(err));
  });



  module.exports= router

  
      