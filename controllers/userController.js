const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '1h' })
}

// login a user
const loginUser = async (req, res) => {
  const {username, password} = req.body

  try {
    const user = await User.login(username, password)

    // create a token
    const token = createToken(user._id)

    res.cookie("token", token, {
        httpOnly: true
    })
        res.redirect("/")
    // res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
    // res.redirect("/login")
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {first_name, last_name, username, email, password} = req.body

  try {
    const user = await User.signup(first_name, last_name, username, email, password)
    // res.cookie("token", token, {
    //     httpOnly: true,
    //     secure: true,
    //     singed: true
    // })
        res.redirect("/login")

    // // create a token
    // const token = createToken(user._id)

    // res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
    // res.redirect("/register")
  }
}

module.exports = { signupUser, loginUser }