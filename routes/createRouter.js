// const router = require("express").Router();
// const blogModel = require("../models/blogModel");

// router.get("/write", (req, res) => {
//     res.render("createBlog");
//   })



// router.post("/write", (req, res) => {
//     const { title, description, content } = req.body;

//     if (!title || !description || !content)
//       return res.send("You have not finished writing. Some details are missing!");

//     const newBlog = new blogModel({ title, description, content });

//     newBlog
//       .save()
//       .then(() => {
//         console.log("Blog Saved Successfully!");
//         res.redirect("/");
//       })
//       .catch((err) => console.log(err));
//   });




//   module.exports= router;