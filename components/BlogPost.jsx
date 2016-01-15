import React from 'react';
import R from 'ramda';
import {posts} from '../data';

const getPost = post => R.filter(R.propEq('url', post), posts)[0];

const BlogPost = React.createClass({
	getInitialState() {
		return {
			component: require('../src/blog/' + this.props.routeParams.post + '.jsx').default
		};
	},

	render() {
		const post = getPost(this.props.routeParams.post);

		return (
			<div className="portfolio-content">
				<div className="jumbotron">
					<div className="container">
						<h1>{post.title}</h1>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-8 col-md-offset-2">
							{this.state.component}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default BlogPost;
