var metalsmith = require('metalsmith');
var less = require('metalsmith-less');
var ignore = require('metalsmith-ignore');

metalsmith(__dirname)
	.source('./src')
	.use(less(require('./config/less')))
	.use(ignore(['**/*.less', '**/*.jsx']))
	.destination('./build')
	.build(function (err) {
		if (err) {
			throw err;
		}
	});
