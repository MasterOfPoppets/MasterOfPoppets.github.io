var Metalsmith = require('metalsmith'),
	drafts = require('metalsmith-drafts'),
	markdown = require('metalsmith-markdown'),
	excerpts = require('metalsmith-excerpts'),
	templates = require('metalsmith-templates'),
	collections = require('metalsmith-collections'),
	permalinks = require('metalsmith-permalinks'),
	serve = require('metalsmith-serve'),
	watch = require('metalsmith-watch')

Metalsmith(__dirname)
	.source('./src')
	.destination('./build')
	.use(drafts())
	.use(markdown())
	.use(excerpts())
	.use(permalinks({
		pattern: ':title'
	}))
	.use(collections({
		posts: {
			pattern: '*/*.html',
			sortBy: 'date',
			reverse: true
		},
		homePosts: {
			pattern: '*/*.html',
			sortBy: 'date',
			reverse: true,
			limit: 3
		}
	}))
	.use(templates({
		engine: 'handlebars',
		directory: 'templates',
		partials: {
			header: 'header',
			footer: 'footer'
		}
	}))
	.use(serve({
		port: 8080,
		verbose: true
	}))
	.use(watch({
		pattern: '**/*'
	}))
	.build(function (err) {
		if (err) throw err
	})