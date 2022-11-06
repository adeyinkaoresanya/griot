const mongoose = require("mongoose");

const {readingTime } = require("../utils/readingTime")

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true

  },

  content: {
    type: String,
    required: true
    
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    
  },

  state: {
    type: String,
    default: 'draft',
    enum: ['draft', 'published'],
    required: true
  },

  read_count: {
    type: Number,
    default: 0,
  },

  reading_time: {
  type: Number,
  required: true
},

  tags: [String],


  postedAt: {
    type: String,
    default: new Date().toString(),
  },
});


BlogSchema.pre('save', function (next) {
  let blog = this

  if (!blog.isModified('content')) return next()

  const timeTaken = readingTime(this.content)

  blog.reading_time = timeTaken
  next()
})

module.exports = new mongoose.model("Blog", BlogSchema, "Blogs");

