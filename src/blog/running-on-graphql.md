---
title: Running on GraphQL
collection: blog
layout: page.hbs
draft: true
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