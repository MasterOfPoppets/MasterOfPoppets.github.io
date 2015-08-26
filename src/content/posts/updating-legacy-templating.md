---
title: Updating a legacy templating solution
template: post.hbt
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

Things take a turn for the worse quite quickly

```html
Put some bad string tmpl_var in here
```

Ignoring the fact that these tags are not valid, my initial attempts to make the code more readable in my editor of choice by adding a closing tag actually caused the templating engine to log errors when processing them! Readability is a vital feature when refactoring brownfield HTML pages that can be in excess of 1000 lines long, as is the ability for the editor to correctly collapse/expand tags - it can get very tiring having to hunt through poorly formatted markup to find a very well hidden `tmpl_else` block.
