const mongoose = require("mongoose");

const {readingTime } = require("../utils/readingTime")

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
    ref: 'User'
    
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


BlogSchema.pre('save', function (next) {
  let blog = this

  // do nothing if the article body is unchanged
  if (!blog.isModified('content')) return next()

  // calculate the time in minutes
  const timeTaken = readingTime(this.content)

  blog.reading_time = timeTaken
  next()
})

module.exports = new mongoose.model("Blog", BlogSchema, "Blogs");

