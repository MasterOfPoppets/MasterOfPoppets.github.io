var superagent = require('superagent')

function test() {
	superagent
		.get('/posts/testPost.md')
		.end(function (err, res) {
			console.log(res)
		})
}

test()