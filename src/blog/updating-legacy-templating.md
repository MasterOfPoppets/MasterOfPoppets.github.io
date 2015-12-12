---
title: Updating a legacy templating solution
collection: blog
template: post.hbs
draft: true
date: 2015-08-26
---
In this post I'd like to talk about templating engines old and new, and how some of the various tools that exist in the current javascript ecosystem can provide a solution to having to deal with legacy HTML templating solutions.

## Introducing the problem

```html
<tmpl_var name="my_perl_variable">
```

This is an example fragment of HTML that makes use of a Perl package called [HTML::Template::Pro](http://sourceforge.net/projects/html-tmpl-pro/) - my current project to upgrade a brownfield application to AngularJS makes use of it extensively. The latest minor version of this pacakge is now 6 years old.

This is not valid HTML.

Things can take a turn for the worse quite quickly:

```html
<img id="toggle_price_display" src="/images/system/<tmpl_if name="default_hide_item_prices">plus<tmpl_else>minus</tmpl_if>.png" title="<tmpl_if name="default_hide_item_prices">Show prices<tmpl_else>Hide prices</tmpl_if>" width="16" height="16"/>
```

Ignoring the fact that these tags are not valid, initial attempts to make the code more readable in my editor of choice by adding a closing tag actually caused the templating engine to log errors when processing them! Readability is a vital feature when refactoring brownfield HTML pages that can be in excess of 1000 lines long, as is the ability for the editor to correctly collapse/expand tags - it can get very tiring having to hunt through poorly formatted markup to find a very well hidden `tmpl_else` block.


## A solution emerges

One of the first things I did when I started on the project was to introduce the use of a build tool (initially Grunt but I soon saw the light that is [Gulp](http://gulpjs.com/)) to automate repetitive processing and eradicate a lot of the pain that was being experienced when dealing with the legacy code and html.

We quickly made use of [gulp-inject](https://github.com/klei/gulp-inject) to avoid having to manually edit template files whenever we required a new library such as lodash or added a new Angular module during development.

But the templating engine remained.
