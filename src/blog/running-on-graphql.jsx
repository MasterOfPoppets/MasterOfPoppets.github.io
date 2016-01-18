import React from 'react';
import {Link} from 'react-router';

const content = () => (
	<article>
		<p>
			Over the last few months I've heard "GraphQL" bandied about quite a bit - particularly by people giving cool talks
			at various React conferences - but I didn't really pay much attention to any of it.
		</p>
		<p>
			Then, a couple of weeks before Christmas, I was discussing with a colleague how best to improve the design of a
			database and REST API we were using as part of a project when he casually dropped it into the conversation as some
			kind of pipedream solution to our problem.
		</p>
		<p>
			It was time I looked a bit deeper into GraphQL...
		</p>
		<h3>So what exactly is GraphQL?</h3>
		<blockquote>GraphQL is a data query language and runtime</blockquote>
		<p>
			It was developed by Facebook and has been used internally since 2012, and now serves something like 200 billion
			APIrequests every single day.
		</p>
		<p>
			By utilising GraphQL on a server it is possible to create a replacement for the more traditional REST API that
			allows any client to specify exactly the data that it wants from a particular request.
		</p>
		<p>This was the light-bulb moment for me.</p>
		<p>
			In my contract for <Link to="/portfolio/the-performance-window-group/">PWG</Link> we ended up writing many
			endpoints to retrieve data for various options. A large proportion of these were fairly common options and were
			used by multiple screens, but quite often this resulted in lot more information being passed across than was
			required for a specific case, or required client-specific modification of the endpoint.
		</p>
		<p>
			There are <a href="http://graphql.org/docs/videos/">some great videos</a> introducing GraphQL over at their site.
		</p>
		<h3>GraphQL in practice</h3>
		<p>
			Hopefully this little introduction to GraphQL has whet the appetite - I am certainly **very** excited by this new,
			cutting edge technology.
		</p>
		<p>
			Over the next few weeks I am aiming to write a series of posts detailing my adventures with GraphQL, starting with
			setting up a simple GraphQL server with introspection (more on this in the next post - trust me, this is where it
			starts to get really exciting).
		</p>
		<p>
			The end goal of this project will be to learn the fundamentals of GraphQL and how it can be used in conjunction
			with React (via Relay). I am hoping to create a simple <a href="http://netrunnerdb.com/">deckbuilder </a>
			application for the card game <a href="https://en.wikipedia.org/wiki/Android:_Netrunner">Android: Netrunner </a>
			using this little stack.
		</p>
		<p>Stay tuned for more!</p>
	</article>
);

export default content();
