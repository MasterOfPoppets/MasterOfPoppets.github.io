import React from 'react';
import {Link} from 'react-router';
import {posts} from '../data';

const Blog = () => (
	<div className="container">
		<ul>
			{posts.map(post => (
				<li key={post.title} className="blog-post">
					<h3><Link to={`/blog/${post.url}`}>{post.title}</Link></h3>
				</li>
			))}
		</ul>
	</div>
);

export default Blog;
