import React from 'react';
import Header from './Header.jsx';
import siteConfig from '../config/site';

const Root = React.createClass({
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="" />
					<meta name="author" content="Gareth Hughes" />

					<title>Quantum Web Development</title>

					<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Italiana&subset=latin" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossOrigin="anonymous" />
					<link rel="stylesheet" href="/css/main.css" />
				</head>

				<body>
					<Header />
					{this.props.children}
					<script src="https://fb.me/react-0.14.6.min.js"></script>
					<script src="https://fb.me/react-dom-0.14.6.min.js"></script>
					<script src="/bundle.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossOrigin="anonymous"></script>
				</body>
			</html>
		);
	}
});

export default Root;
