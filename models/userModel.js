const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: ObjectId,

  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
  },

  author_name: {
    type: String
    
  },

  username: {
    type: String,
    required: true
    
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
    },

  blogs: [{type: Schema.Types.ObjectId, ref: "Blog"}]
});


userSchema.statics.signup = async function(first_name, last_name, username, email, password) {

  if (!first_name || !last_name || !username || !email || !password) {
    throw Error('All fields must be completed!')
  }
  // if (!validator.isEmail(email)) {
  //   throw Error('Email is not valid')
  // }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error('Password is not strong enough. Use a combination of uppercase, lowercase and special characters')
  // }

  const isinUse = await this.findOne({ email })

  if (isinUse) {
    throw Error('Email already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  const author_name = first_name.concat(" ", last_name);

  const user = await this.create({ first_name, last_name, author_name, username, email, password: hashedPassword })

  return user
}

// static login method
userSchema.statics.login = async function(username, password) {

  if (!username || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ username })
  if (!user) {
    throw Error('Incorrect username')
  }

  const matchPassword = await bcrypt.compare(password, user.password)
  if (!matchPassword) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
