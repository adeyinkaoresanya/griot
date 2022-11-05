const router = require("express").Router();
// const blog = require("../models/blogModel");
const { pagination } = require("../controllers/blogController")


router.get("/", pagination)





module.exports = router;