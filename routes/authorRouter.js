const jwt = require("jsonwebtoken");

const router = require("express").Router();
const blog = require("../models/blogModel");

const mongoose= require("mongoose")

jwt_decode = require("jwt-decode"); 

        

router.get("/user", async (req, res) => {
  
  const token = req.cookies.token;
  
  
  let base64Url = token.split('.')[1];
  
  splitToken = new Buffer.from(base64Url, 'base64').toString('ascii');
  var obj= JSON.parse(splitToken)
  const authorId = mongoose.Types.ObjectId(obj._id);

  // console.log(obj)
  // console.log(authorId)

  const blogs = await blog.find({"author": authorId});
//  res.json({ authorBlogs: blogs });
  res.render("ownerBlogs", { authorBlogs: blogs })
});


  module.exports = router;

