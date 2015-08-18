---
title: Markdown Blogging with Node.JS and Firebase
layout: post.hbs
date: 2014-12-03T00:00:00.000Z
---

For the majority of this week I have been focusing on adding a rudimentary blogging engine to my site, allowing me to post updates such as this.

There are many different options out there for blogging, from small but powerful Node.js modules such as [Wheat](https://github.com/creationix/wheat) to plugin heavy behemoths like Wordpress. However, since developing this site has partly been a learning exercise, I thought I would have a go at developing my own blogging engine - one that would allow me to customise to my own requirements as I went along.

So where to start?

# Phase 1: A content directory
First of all, I thought my site would contain a structured `content` folder along the lines of this:

```
[content]
-> [my-first-post]
   -> post.json
   -> post.markdown
```

Each post would be in its own seperate folder, corresponding to the link address on the site. This folder would contain a `post.json` file containing some metadata such as title and date, and `post.markdown`. This file would contain the actual post and be written using [Markdown](http://daringfireball.net/projects/markdown/), allowing me to intuitively write posts that get rendered into beautiful HTML.

This first approach ended up being quite easy - firstly get Node to read the folder structure when you first hit the blog page, and generate a nice list of "links" to pass to the Jade template. Clicking on a link would then render a new Jade template with the specific post content in.

Great - but theres a problem. At the moment my site is deployed on [Heroku](https://www.heroku.com/) meaning that any content update would require a git push and restarting of the app. So the next step, take what I've learnt but extract the content to somewhere else.

# Phase 2: Remote content
In using a remote location for my content, my thoughts first turned to Wheat, and storing the content in a file structure as before, but in a seperate Git repository. However, lately I have been playing around with [Firebase](https://www.firebase.com), and so I decided to have a bit of fun with that instead. It also allows much more flexibility - allowing me to post new content virtually anywhere.

Expanding the data structure from my first attempt, my Firebase now looks something a little like this:

```
blogEntries
->  new-professional-site
    ->  date:
    ->  post:
    ->  stub:
    ->  title:
    ->  url:
```

Each new entry is added to the `blogEntries` child, keeping it nicely organised and allowing the use of specific security rules. The entry is keyed by its URL, mainly for readability purposes at the moment, but it may be handy later on. Each entry again contains things like date, title and the actual post, again written in Markdown. It also features a new `stub` - which will be used as a short summary when viewing all the blog entries before choosing one to drill into. This again is written in Markdown.

Now when a user visits the blog page, Node starts up a Firebase `child_added` listener, populating the list of current blog entries, and then sticks them into the existing `blog.jade` template

Drilling down into a particular blog post does a similar thing, except it registers...

```
once('value', function (snapshot)...
```

on the particular child entry being viewed - after all, we are only interested in getting the entry once! This is then placed into the existing `blogEntry.jade`.

# Phase 3: Content management
Now that my Firebase was in place and ready to be used by the site, I needed a nicer way of actually writing the data, as opposed to directly modifying it through the Firebase UI. I wanted to write my posts in Markdown, edit the post metadata and then have them sent directly to Firebase.

Enter [blog-post-author](https://github.com/MasterOfPoppets/blog-post-author).

This is currently a simple program, again written with Node.js, that basically scans a `content` folder for three files: `post.json`, `post.markdown` and `stub.markdown`. Once it has these it fires off a `setWithPrioriy` call to Firebase using `Firebase.ServerValue.TIMESTAMP`, allowing me to order my posts chronologically.

Currently this program is very basic - editing data essentially involves ensuring the URL in the `post.json` file is the same. Going back and editing more historical entries would definitely prove more annoying. However, the program does what I want to do, and I already have some great ideas of how to expand it!

# Phase 4: The future is... Angular
Currently this is all being done on the server-side by Node. However, Firebase excels at running entirely on the client-side, so my next step with the blogging on this site is to move entirely to using AngularJS - in fact the only thing that will remain will be that my Node server will serve Jade templates as before, though these will be modified to use Angular directives instead of being passed in Jade variables.

I also want to work on the blog-post-author project a bit, making it a bit more user friendly. I have a volunteer client who will be using this to post blog entries to the site we are developing and anything that makes his life easier is going to be great.

Watch this space...!
