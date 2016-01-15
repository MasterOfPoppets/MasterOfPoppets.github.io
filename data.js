var R = require('ramda');

var getPortfolioUrl = R.compose(R.concat('/portfolio/'), R.prop('url'));

var getPostUrl = R.compose(R.concat('/blog/'), R.prop('url'));

var portfolio = [
	{
		url: 'the-performance-window-group',
		title: 'The Performance Window Group',
		logo: {
			image: 'http://res.cloudinary.com/gurrkin/image/upload/v1450612507/portfolio/pwg/pwg_logo.png',
			background: 'hsl(63, 64%, 33%)',
			colour: 'hsl(0, 0%, 93%)'
		},
		tags: [
			'Angular',
			'Node',
			'Full-Stack'
		]
	},
	{
		url: 'gbst-syn',
		title: 'GBST Syn~',
		logo: {
			image: 'http://res.cloudinary.com/gurrkin/image/upload/c_scale,h_199/v1422541316/portfolio/gbst-syn/syn_logo.png',
			background: 'hsl(216, 61%, 25%)',
			colour: 'hsl(0, 0%, 93%)'
		},
		tags: [
			'Google Web Toolkit',
			'Java',
			'Full-Stack'
		]
	}
];

var posts = [
	{
		url: 'running-on-graphql',
		title: 'Running on GraphQL',
		date: '05-01-2016'
	},
	{
		url: 'a-brief-update',
		title: 'A Brief Update',
		date: '31-05-2015'
	},
	{
		url: 'blogging-with-angular',
		title: 'Blogging with Angular',
		date: '28-01-2015'
	},
	{
		url: 'site-launch',
		title: 'Site Launch!',
		date: '22-11-2014'
	},
	{
		url: 'famo-us-and-thames-valley-web-developers',
		title: 'Famo.us and Thames Valley Web Developers',
		date: '19-12-2014'
	},
	{
		url: 'reloading-controllers-with-ui-router',
		title: 'Reloading Controllers with UI Router',
		date: '12-01-2015'
	},
	{
		url: 'markdown-blogging-with-node-js-and-firebase',
		title: 'Markdown Blogging with Node.JS and Firebase',
		date: '03-12-2014'
	}
];

var routes = [
	'/',
	'/about',
	'/portfolio',
	R.map(getPortfolioUrl, portfolio),
	'/blog',
	R.map(getPostUrl, posts)
];

module.exports = {
	portfolio: portfolio,
	posts: posts,
	routes: R.flatten(routes)
};
