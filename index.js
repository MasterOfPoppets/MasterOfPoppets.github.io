var metalsmith = require('metalsmith');
var Handlebars = require('handlebars');
var R = require('ramda');
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

var expressConfig = {
	livereload: siteConfig.isDev
};

var watchConfig = {
	paths: {
		'${source}/**/*.md': true,
		'${source}/less/*': 'less/*',
		'templates/**/*': '**/*'
	},
	livereload: siteConfig.isDev
};

Handlebars.registerHelper('link', function (path) {
	return siteConfig.baseUrl + path;
});

// rejectDrafts :: [Object] -> [Object]
var rejectDrafts = R.reject(R.propEq('draft', true));

// metadataInfo :: Object -> Object
var metadataInfo = R.pick(['title', 'path', 'tags', 'logo']);

// getCollectionInfo :: [Object] -> String
var getCollectionInfo = R.compose(JSON.stringify, R.map(metadataInfo), rejectDrafts);

var collectionsToJS = function () {
	return function (files, metalsmith, done) {
		var metadata = metalsmith.metadata();
		for (var file in files) {
			var data = files[file];
			if (data.getCollections) {
				var contents = data.contents.toString();
				contents = R.replace('{blog}', getCollectionInfo(metadata.collections.blog), contents);
				contents = R.replace('{portfolio}', getCollectionInfo(metadata.collections.portfolio), contents);
				data.contents = new Buffer(contents);
			}
		}
		done();
	};
};

metalsmith(__dirname)
	.source('./src')
	.use(drafts())
	.use(collections(require('./config/collections')))
	.use(markdown())
	.use(excerpts())
	.use(permalinks(':collection/:title'))
	.use(collectionsToJS())
	.use(less(require('./config/less')))
	.use(layouts(require('./config/layouts')))
	.use(ignore(require('./config/ignore')))
	.use(msIf(siteConfig.isDev, express(expressConfig)))
	.use(msIf(siteConfig.isDev, watch(watchConfig)))
	.destination('./build')
	.build(function (err) {
		if (err) {
			throw err;
		}
	});
