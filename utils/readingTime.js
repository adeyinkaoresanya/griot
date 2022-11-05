const readingTime = (blog) => {
    const wordCount = blog.trim().split(/\s+/).length

    const wordsPerMinute = wordCount / 225
    return Math.ceil(wordsPerMinute)
  }
  
  module.exports = { readingTime }