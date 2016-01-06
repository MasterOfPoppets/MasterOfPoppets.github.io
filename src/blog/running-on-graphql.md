---
title: Running on GraphQL
collection: blog
layout: page.hbs
date: 2016-01-05
---
Over the last few months I've heard "GraphQL" bandied about quite a bit - particularly by people giving cool talks at
various React conferences - but I didn't really pay much attention to any of it.

Then, a couple of weeks before Christmas, I was discussing with a colleague how best to improve the design of a database
and REST API we were using as part of a project when he casually dropped it into the conversation as some kind of 
pipedream solution to our problem.

It was time I looked a bit deeper into GraphQL...

### So what exactly is GraphQL?

> GraphQL is a data query language and runtime

It was developed by Facebook and has been used internally since 2012, and now serves something like 200 billion API 
requests every single day.

By utilising GraphQL on a server it is possible to create a replacement for the more traditional REST API that allows
any client to specify exactly the data that it wants from a particular request.

This was the light-bulb moment for me.

In my contract for [PWG](/portfolio/the-performance-window-group/) we ended up writing many endpoints to retrieve data
for various options. A large proportion of these were fairly common options and were used by multiple screens, but quite
often this resulted in lot more information than was required for a specific case, or required client-specific
modification of the endpoint.

There are [some great videos](http://graphql.org/docs/videos/) introducing GraphQL over at their site.

### GraphQL in practice

Hopefully this little introduction to GraphQL has whet the appetite - I am certainly **very** excited by this new, 
cutting edge technology.

Over the next few weeks I am aiming to write a series of posts detailing my adventures with GraphQL, starting with 
setting up a simple GraphQL server with introspection (more on this in the next post - trust me, this is where it starts
to get really exciting).

The end goal of this project will be to learn the fundamentals of GraphQL and how it can be used in conjunction with
React (via Relay). I am hoping to create a simple [deckbuilder](http://netrunnerdb.com/) application for the card game
[Android: Netrunner](https://en.wikipedia.org/wiki/Android:_Netrunner) using this little stack.

Stay tuned for more!