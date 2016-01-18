import React from 'react';
import {Link} from 'react-router';

const content = () => (
	<article>
		<p>NetrunnerQL is a lab project aimed at learning GraphQL in order to evangelise about it.</p>
		<p>
			For a brief introduction to the project please refer to <Link to="/blog/running-on-graphql">this blog post</Link>
		</p>
		<p>To see it in action, <a href="http://netrunnerql.quantumweb.io">click here!</a></p>
		<h4>Updates</h4>
		<p>The following blog posts detail updates to the project (most recent first)</p>
		<ul>
			<li><Link to="/blog/setting-up-a-basic-graphiql-server">Setting up a basic GraphiQL server</Link></li>
		</ul>
	</article>
);

export default content();
