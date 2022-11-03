const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,

  first_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
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
    required: true,
    minimum: 8
    }
});



module.exports = new mongoose.model("User", UserSchema);
