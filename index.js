var Metalsmith = require('metalsmith'),
	markdown = require('metalsmith-markdown'),
	templates = require('metalsmith-templates'),
	permalinks = require('metalsmith-permalinks')

Metalsmith(__dirname)
	.use(markdown())
	.use(templates('handlebars'))
	.use(permalinks({ pattern: ':title' }))
	.destination('./build')
	.build(function (err) {
		if (err) throw err
	})