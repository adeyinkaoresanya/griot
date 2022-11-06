const router = require("express").Router();

const { pagination } = require("../middleware/pagination")


router.get("/", pagination)





module.exports = router;