var router = require('./app.route'),
	Eryri = require('./eryri/eryri'),
	_ = Eryri._,
	superagent = require('superagent'),
	request = require('request'),
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
	_(request('http://masterofpoppets.github.io/posts/'  + hash + '.md'))
		.map(function (response) {
			return response.text
		})
		.map(blogPost)
		.each(Eryri.updateDom)

	//superagent
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