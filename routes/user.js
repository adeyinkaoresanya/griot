const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()



// login route
router.get("/login", (req, res) => {
    res.render("login");
  })

router.post("/login", loginUser)

// signup route
router.get("/register", (req, res) => {
    res.render("register");
  })
router.post('/register', signupUser)

module.exports = router