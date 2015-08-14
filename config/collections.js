module.exports = {
  posts: {
    pattern: 'content/**/*.md',
    sortBy: 'date',
    reverse: true
  },
  latestPosts: {
    pattern: 'content/**/*.md',
    sortBy: 'date',
    reverse: true,
    limit: 3
  }
}
