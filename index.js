var metalsmith = require('metalsmith');
var Handlebars = require('handlebars');
var drafts = require('metalsmith-drafts');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var excerpts = require('metalsmith-excerpts');
var permalinks = require('metalsmith-permalinks');
var less = require('metalsmith-less');
var layouts = require('metalsmith-layouts');
var ignore = require('metalsmith-ignore');
var msIf = require('metalsmith-if');
var express = require('metalsmith-express');
var watch = require('metalsmith-watch');
var siteConfig = require('./config/site')(process.argv);

Handlebars.registerHelper('link', function (path) {
	return siteConfig.baseUrl + path;
});

metalsmith(__dirname)
	.source('./src')
	.use(drafts())
	.use(collections(require('./config/collections')))
	.use(markdown())
	.use(excerpts())
	.use(permalinks(':collection/:title'))
	.use(less(require('./config/less')))
	.use(layouts(require('./config/layouts')))
	.use(ignore(require('./config/ignore')))
	.use(msIf(siteConfig.isDev, express(siteConfig.express)))
	.use(msIf(siteConfig.isDev, watch(siteConfig.watch)))
	.destination('./build')
	.build(function (err) {
		if (err) {
			throw err;
		}
	});
