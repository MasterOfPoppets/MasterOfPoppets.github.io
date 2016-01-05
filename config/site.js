var prod = {
	baseUrl: 'http://quantumweb.io/',
	isDev: false
};
var dev = {
	baseUrl: 'http://localhost:3000/',
	isDev: true,
	express: {
		livereload: true
	},
	watch: {
		paths: {
			'${source}/**/*.md': true,
			'${source}/less/*': 'less/*',
			'templates/**/*': '**/*'
		},
		livereload: true
	}
};

module.exports = function (args) {
	var config = dev;

	args.forEach(function (arg) {
		if (arg === '-p' || arg === '--production') {
			config = prod;
		}
	});

	return config;
};
