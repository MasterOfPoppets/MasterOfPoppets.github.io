var Metalsmith = require('metalsmith'),
    Handlebars = require('handlebars'),
    metalsmithIf = require('metalsmith-if'),
	drafts = require('metalsmith-drafts'),
    less = require('metalsmith-less'),
	markdown = require('metalsmith-markdown'),
	excerpts = require('metalsmith-excerpts'),
	templates = require('metalsmith-templates'),
	collections = require('metalsmith-collections'),
	permalinks = require('metalsmith-permalinks'),
    ignore = require('metalsmith-ignore'),
	serve = require('metalsmith-serve'),
	siteConfig = require('./config/site')(process.argv)

Handlebars.registerHelper('link', function (path) {
    return siteConfig.baseUrl + path
})

Metalsmith(__dirname)
	.source('./src')
	.use(drafts())
    .use(less(require('./config/less')))
	.use(markdown())
	.use(excerpts())
	.use(permalinks(require('./config/permalinks')))
	.use(collections(require('./config/collections')))
	.use(templates(require('./config/templates')))
    .use(ignore(require('./config/ignore')))
    .use(metalsmithIf(siteConfig.isDev, serve({
        port: 8080,
        verbose: true
    })))
    .destination('./build')
	.build(function (err) {
		if (err) throw err
	})