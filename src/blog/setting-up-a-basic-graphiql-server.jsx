import React from 'react';
import Gist from '../../components/Gist.jsx';

const content = () => (
	<article>
		<p>Lets start by exploring one of the more dev-centric aspects of GraphQL - introspection.</p>
		<p>
			In GraphQL it is possible to create an introspection query that allows us to ask the server what kind of queries
			or modifications we are allowed to make, as well as what the type system looks like. This allows developers to
			build really neat tools that can assist when it comes to development. Imagine being able to introspect a query
			that you want to make and ensure that you are retrieving not only the exact fields that you want but also that
			they are then going to be used in the way that your front-end has been coded to expect!
		</p>
		<p>To begin with introspection, we need to create ourselves a simple GraphQL server.</p>
		<h3>Creating the server</h3>
		<p>First we need to install a few dependencies</p>
		<blockquote>npm install koa koa-graphql koa-mount --save-dev</blockquote>
		<p>Then we can write a barebones server:</p>
		<Gist gist="MasterOfPoppets/03a80d708aec3576e0b2" file="server.js" />
		<p>
			There are two things to note here. Firstly, we are passing a schema option - this is the core of GraphQL and we'll
			get to it shortly. Secondly, we set the <code>graphiql</code> flag to true. GraphiQL is a tool developed by
			Facebook to show off the power of introspection within GraphQL.
		</p>
		<p>
			GraphiQL is a React component that is returned by this endpoint. It automatically fires an introspection query at
			the server. The results are accessed via a user interface which allows developers to create queries or
			modifications and test them against the server to see the results.
		</p>
		<p>You can see this running on the demo app <a href="http://netrunnerql.quantumweb.io/graphql">here</a>.</p>
		<p>
			So, now we have our basic GraphQL server setup and providing us an introspection endpoint. At the moment our
			introspection isn't very helpful - we're not actually allowing our GraphQL server to do anything. For that, we
			need to define a schema.
		</p>
		<h3>Creating the schema</h3>
		<p>
			The schema is the core of your GraphQL server. It defines exactly what the server can do. Want a particular field
			returned from an endpoint - well it had better be defined in the schema first.
		</p>
	</article>
);

export default content();
