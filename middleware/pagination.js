const blog = require('../models/blogModel')

    
const pagination = async (req, res) => {

  try {

    const blogsPerPage= 20

    const totalRecords = await blog.find().count();

    const totalPages = Math.ceil(totalRecords / blogsPerPage);
    
    const page= req.query.page || 0;

    const allBlogs = await blog.find()
                                .sort({reading_time: -1, postedAt: -1})
                                .skip(page * blogsPerPage)
                                .limit(blogsPerPage)
                                .populate('author').exec();
    
    res.status(200).json({allBlogs})

    res.render("index", { blogs: allBlogs, pages: totalPages});
    } 
    catch (error) {
    res.status(400).json({error: error.message})
    // res.redirect("/login")
  }
}

module.exports = { pagination }
