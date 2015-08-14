---
title: Streams and User Interaction
template: post.hbt
draft: true
date: 2015-01-28T00:00:00.000Z
---

Take a quick look at this statement

```javascript
user-interactions.pipe(virtual-dom).pipe(win)
```

It will either look like gibberish or you will glance at it with a knowing smile. I want this post to explore how something as mundane as changing my build tool of choice has led me to thinking why the above statement is nothing less than a revelation.

# Gulp - The streaming build system
It all started one day at work when a colleague and I were getting tired of waiting around for 30+ seconds for Grunt to do everything that we'd set it up to do. In a large system such as ours, constantly writing to file as a product of every task will eventually begin to cause real headaches. There must be a better way.

I found a great article [about why we should stop using grunt and gulp.](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/)

Now this article goes into great detail about how you can use npm scripts to cover pretty much anything you might want to do with your build tool. I felt however, that in terms of time to implement our existing tasks with a new build tool, Gulp would be faster as:
- I had a better handle on the language (javascript) than unix based scripting
- The code is cleaner, in as much as it is easier to see, for any given task, what its dependencies are

So, having made the decision to use Gulp, I set about reading up. Initially I was puzzled by what seemed like a lack of documentation, but I quickly realised this is one of the powers of Gulp. Having just a handful of commands to learn and a "code over configuration" vibe means that you don't get bogged down over fiddly syntax.

The [Gulp documentation](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is actually brilliant. First you get a [couple of recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - how to achieve common tasks the Gulp way, and then [several articles](https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles) on further information.

The most eye-opening one of these is a fantastic [Introduction to Node Streams](https://github.com/substack/stream-handbook) - I urge you to go and read it. All. Now.

# Streamy thing goes in, streamy thing comes out
One of the basic idea behind a stream, and this is another thing that attracted me to Gulp, is the idea that a stream should do one thing and do it well. Whereas a typical Grunt plugin with come with a barrage of options, a Gulp plugin, [if you need one at all](http://blog.overzealous.com/post/74121048393/why-you-shouldnt-create-a-gulp-plugin-or-how-to), shouldn't have any need for configuration options. Just take a look at the [Grunt](https://github.com/gruntjs/grunt-contrib-less) and [Gulp](https://github.com/plus3network/gulp-less) versions of something simple like a Less processor.

By using streams we can create building blocks that we can connect - or pipe - together to create powerful combinations. The above Less plugin doesn't need an option to minify, because that is not it's job. It's job is to compile Less. If you then want to minify the result, pipe it to a [minifier!](https://github.com/murphydanger/gulp-minify-css)
