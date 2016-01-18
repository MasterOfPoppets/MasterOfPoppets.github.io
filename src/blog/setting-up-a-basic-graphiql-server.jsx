import React from 'react';
import Gist from '../../components/Gist.jsx';

const gistId = 'MasterOfPoppets/03a80d708aec3576e0b2';

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
		<Gist gist={gistId} file="server.js" />
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
		<p>
			For this demo application we shall start out with a very basic schema. Given that we are trying to make a database
			of cards, it would make sense to be able to get a list of all the cards as well as information on a specific card.
			Lets define a basic type of <code>Card</code>:
		</p>
		<Gist gist={gistId} file="cardType.js" />
		<p>
			We are defining a Card to have (at least initially) a few basic properties. Title, subtitle and type are all
			strings and subtypes is a list of strings. We have also added a description to the type and the individual fields
			- this can aid development when exploring the schema.
		</p>
		<p>
			Having defined a Card type, it makes sense to use this within our first basic GraphQL queries. We are going to
			expose two queries on our endpoint - one to simply return all the cards available, and a second to return a
			specific card by title. Here's what that might look like:
		</p>
		<Gist gist={gistId} file="schema.js" />
		<p>
			By adding the <code>query</code> field to a GraphQLSchema we are able to define any number of queries that are
			available on this endpoint.
		</p>
		<p>
			To create a query to return all cards we define a name for it - allCards - and then define everything that can be
			included in the response when this query is run. We shall use our previously defined <code>cardType</code>. Our
			query can reply with any combination of the title, subtitle, type and subtypes fields!
		</p>
		<p>
			We define how our query actually responds by providing the <code>resolve</code> function. In this case we are
			simply going to return a json object which just happens to have some card data in it. This json object contains
			all the information available for each card - GraphQL is responsible for filtering out the fields that the
			front-end hasn't asked for!
		</p>
		<p>
			Our second query - to find a card by it's title - requires us to pass query parameters. This is achieved by
			specifying an <code>args</code> property on the query object. The args object specifies the name of a field that
			you want to query over, in this case title. As with everything else we've seen so far, this is typed and can have
			a description attached to it to aid development.
		</p>
		<p>
			The query parameters are then passed as the second argument to the <code>resolve</code> function that we've
			already seen. We can then use these parameters with a library such as <a href="http://ramdajs.com/">Ramda</a> to
			filter our data before it is returned.
		</p>
		<p>
			With a basic schema now in place we can now play around with the GraphiQL introspection! A demo of this is
			currently running <a href="http://netrunnerql.quantumweb.io/graphql">here</a>. This is currently a very basic
			start - next up I'm going to look at expanding the schema to cover the full requirements of the NetrunnerQL
			application.
		</p>
	</article>
);

export default content();
