var Metalsmith = require('metalsmith'),
	drafts = require('metalsmith-drafts'),
	markdown = require('metalsmith-markdown'),
	templates = require('metalsmith-templates'),
	collections = require('metalsmith-collections'),
	permalinks = require('metalsmith-permalinks'),
	serve = require('metalsmith-serve')

Metalsmith(__dirname)
	.source('./src')
	.destination('./build')
	.use(drafts())
	.use(markdown())
	.use(permalinks({
		pattern: ':title'
	}))
	.use(collections({
		posts: {
			pattern: '*/*.html',
			sortBy: 'date',
			reverse: true
		}
	}))
	.use(templates('handlebars'))
	.use(serve({
		port: 8080,
		verbose: true
	}))
	.build(function (err) {
		if (err) throw err
	})