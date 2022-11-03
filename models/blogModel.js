const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String
  },

  description: {
    type: String,

  },

  content: {
    type: String,
    
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },

  state: {
    type: String,
    default: 'draft',
    enum: ['draft', 'published'],
  },

  read_count: {
    type: Number,
    default: 0,
  },

  reading_time: Number,

  tags: [String],


  postedAt: {
    type: String,
    default: new Date().toString(),
  },
});

module.exports = new mongoose.model("Blog", BlogSchema, "Blogs");

