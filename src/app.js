var router = require('./app.route'),
	Eryri = require('./eryri/eryri'),
	_ = Eryri._,
	superagent = require('superagent'),
	blogSummary = require('./components/blog.summary')

Eryri.applyToDom(function () {
	router().each(function (hash) {
		console.log(hash)
		getPosts()
	})
})

function getPosts() {
	superagent
		.get('/posts/posts.json')
		.end(function (err, res) {
			console.log(res)
			_(res.posts)
				.doto(console.log)
				.through(renderAllPosts)
				.each(Eryri.updateDom)
		})
}

function renderAllPosts(stream) {
	return stream
		.map(blogSummary)
		.collect()
		.map(function (allPosts) {
			return h('div', allPosts)
		})
}