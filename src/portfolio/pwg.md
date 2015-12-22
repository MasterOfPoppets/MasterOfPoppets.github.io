---
title: The Performance Window Group
collection: portfolio
layout: page.hbs
logo:
    img: http://res.cloudinary.com/gurrkin/image/upload/v1450612507/portfolio/pwg/pwg_logo.png
    background: hsl(63, 64%, 33%)
tags: Angular, Node, Full-Stack
---

# The Performance Window Group

The Performance Window Group (PWG) make timber windows and doors for both private customers and trade dealers.

Their long-term vision was to rejuvenate their legacy quoting tool, "Aperture", whilst fulfilling a number of 
requirements along the way, including:

*   Improve the ability to make timely changes to the system
*   Provide better support for mobile devices, particularly tablets

With Aperture starting life written in jQuery hooked up to a Perl back-end, the development team took some time to 
analyse the various frameworks available and made a decision to switch to using Angular - bringing Quantum Web
Development on board to facilitate this transition.

### Transitioning to Angular
    
Two challenges presented themselves almost immediately. Firstly, the team lacked much appreciation for user experience,
especially with regard to the system being used on mobile devices. Secondly, the existing system was full to bursting of
code duplication. A great example of how we tackled these challenges was the overhaul of a widget best described as
Frankenstein's monster - the colour selector! 

<img src="http://res.cloudinary.com/gurrkin/image/upload/v1450621557/portfolio/pwg/frankenselector.png"
    alt="PWG Colour Selector" class="img-responsive img-half center-block">

The user was presented with a select box of approximately 200 colour options. Each colour option also featured a swatch
loaded via a round trip to the server. The final two options in this select box were a pair of search fields that
allowed the user to search alternate colour ranges and choose a colour from them - this time without the aid of a swatch.

By introducing Bootstrap to the technology stack we were able to use it in conjunction with Angular to create a new
directive that would allow a vastly improved, mobile-first, user experience. In addition, by using Angular to create a 
small library of components, we were able to encourage the team to think in a more abstract and [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself)
way.

<img src="http://res.cloudinary.com/gurrkin/image/upload/v1450619051/portfolio/pwg/colours.png"
    alt="PWG Colour Selector" class="img-responsive">
    
We were able to further improve the user experience and the overall consistency of the application by adding an optional
search field to all similar components.

### Server sanity

The USP of the existing Aperture application was its product rendering engine. As a quote was modified by the user, the
engine would be called to keep the image up to date according to the various options shown. This was important as it 
gave customers the ability to get a good idea of what their product would look like, but also for the factory that made
the products - these drawings formed the technical blueprint of what would actually be made.

<img src="http://res.cloudinary.com/gurrkin/image/upload/v1450781294/portfolio/pwg/sash_window.png"
    alt="PWG Sash Window Drawing" class="img-responsive img-half center-block">
    
Performance wise it left a lot to be desired.