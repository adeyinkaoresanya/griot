const jwt = require("jsonwebtoken");

const router = require("express").Router();
const blog = require("../models/blogModel");

const mongoose= require("mongoose")

jwt_decode = require("jwt-decode"); 

        

router.get("/user", async (req, res) => {
  try
  { const token = req.cookies.token;
  
  let base64Url = token.split('.')[1];
  
  splitToken = new Buffer.from(base64Url, 'base64').toString('ascii');
  const obj= JSON.parse(splitToken)
  const authorId = mongoose.Types.ObjectId(obj._id);
  const blogsPerPage= 2

  const totalRecords = await blog.find().count();

  const totalPages = Math.ceil(totalRecords / blogsPerPage);
    
  const page= req.query.page || 0;

  const blogs = await blog.find({"author": authorId})
                                .sort({postedAt: -1, reading_time: -1})
                                .skip(page * blogsPerPage)
                                .limit(blogsPerPage);

    res.render("ownerBlogs", { authorBlogs: blogs, pages: totalPages});
    } catch (error) {
    res.status(400).json({error: error.message})
  }
}
);

  module.exports = router;

