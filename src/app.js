var router = require('./app.route'),
	Eryri = require('./eryri/eryri'),
	_ = Eryri._,
	request = require('request'),
	superagent = require('superagent'),
	blogPost = require('./components/blog.post'),
	blogSummary = require('./components/blog.summary'),
	h = require('virtual-dom/h')

Eryri.applyToDom(function () {
	router().each(function (hash) {
		if (hash) {
			getPost(hash)
		} else {
			getPosts()
		}
	})
})

function getPost(hash) {
	_(request.get('./posts/' + hash + '.md'))
		.map(function (res) {
			return res.text
		})
		.map(blogPost)
		.each(Eryri.updateDom)

	//request
	//	.get('./posts/' + hash + '.md')
	//	.end(function (err, res) {
	//		_([res.text])
	//			.map(blogPost)
	//			.each(Eryri.updateDom)
	//	})
}

function getPosts() {
	superagent
		.get('./posts/posts.json')
		.end(function (err, res) {
			_(JSON.parse(res.text).posts)
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