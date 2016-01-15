import React from 'react';

const content = () => (
	<article>
		<p>
			As I mentioned a little while ago in <a href="http://garethhughes.io/blog/markdown-blogging-with-node">this </a>
			post, my intention was to move to an entirely client-side blogging engine. This would taking my existing solution
			which used Node to serve Jade templates containing a blog entry retrieved from Firebase, and moving the Firebase
			retrieval to the client-side.
		</p>
		<p>
			The plan was to still serve a small Jade template from Node, but instead of containing the actual blog entry, it
			would just contain a handful of Angular directives and data-bindings that I would create with a new module.
		</p>
		<h3>The Fireblogger module</h3>
		<p>
			Creating a new module in Angular is great in order to encapsulate a small amount of functionality for a particular
			purpose. In this case, I wanted my module to do a handful of jobs:
		</p>
		<ul>
			<li>Load all of the posts</li>
			<li>Load a specific post for a given URL</li>
			<li>Provide a markdown directive to display markdown</li>
		</ul>
		<p>
			Since I would be using a centralised model to hold on to this data, I needed to get my head around the way that
			Angular's data-binding works with regards to being updated. Whilst something as simple as
		</p>
		<pre>
			<code>var post = null</code>
		</pre>
		<p>will allow you to assign a value to it, displaying it in the browser with an Angular data-binding such as</p>
		<pre>
			<code>&#123;&#123; post &#125;&#125;</code>
		</pre>
		<p>
			it is not particularly good at keeping the value updated if you changed it via code - something that will happen
			if a use wishes to view a different blog post. There are many solutions around to solve this problem, including
			setting up a <code>$watch</code>, and forcing an update with <code>$apply</code>, but reading into this seems to
			indicate that this is not the correct "Angular" way of doing things, and can break the digest cycle.
		</p>
		<p>
			Instead, we can store the information in a <code>model</code> object. This leads to something looking a little
			like this
		</p>
		<pre>
			<code>
				var model = &#123;
					post: null
				&#125;
			</code>
		</pre>
		<p>and a data-binding such as</p>
		<pre>
			<code>&#123;&#123; model.post &#125;&#125;</code>
		</pre>
		<p>
			Now the factory can update the model and Angular will ensure that the data-bindings reflect this. On the surface,
			this is a simple change, and it definitely fits more nicely with the  MVC approach, but due to a lack of good
			examples online and other misleading suggestions, it took a while to figure out this was the correct way of doing
			things!
		</p>
		<h3>Improvements</h3>
		<p>
			Whilst the new Fireblogger module I've created currently serves its purpose, there are definitely some further
			improvements that I would like to make to it.
		</p>
		<p>
			Firstly, loading all of the posts up front is not a great idea! For a start, when loading all the posts, I don't
			need the actual post content, as this isn't displayed, so I need to investigate if it is possible in Firebase to
			retrieve a subset of fields for a particular record.
		</p>
		<p>
			Secondly, the markdown directive I have created for this purpose is quite specific and is tied to a model
			property. I would ideally like to make this more generic, and probably extract it out into its own (very small!)
			module entirely.
		</p>
		<p>
			I would also like to extract the module entirely, and create my own <a href="http://bower.io/">Bower </a>
			component, as my plan is to use the same functionality that the module provides as part of the improvements I have
			in mind for my blog-post-author project.
		</p>
	</article>
);

export default content();
