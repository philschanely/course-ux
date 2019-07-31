---
type: lessons
title:  "2: Tools to Improve Handoff"
---
### Overview

This unit we're going to cover some contemporary tools that help with the concept of "handoff"---as in the handoff from you the designer to others who will take a project forward further. Your project for this round will involve choosing one of several different systems that relate to handoff. Two of these are content management systems---which help deal with the challenge for handing off an overall finished project to your client to manage. The third option for your project involves handoff from designer to developer and helps you build a style toolkit.

### Markdown

First up though, let's talk about a helpful technology that simplifies at least the markup process. As simple as HTML is to write, it can be a bit of a bother to write out by hand, especially when you value semantic markup and find yourself spending a lot of time marking paragraphs and headings and lists.

So for run-of-the-mill content, we introduce Markdown, a shorthand form for writing HTML markup. It allows you to write plain text content with just a few key symbols that an interpreter or compiler can convert into HTML. The systems we use for the project in this round all make use of Markdown in some shape or fashion.

Take a look at how to write Markdown from [its inventor's site](https://daringfireball.net/projects/markdown/basics), and from [Github's guide](https://guides.github.com/features/mastering-markdown/).

You'll see this at work in the next sections, so no need to install the inventor's Markdown script.

So why use Markdown? Two nice reasons:

1. It speeds up content writing for you even though you know HTML.
2. It is much simpler to teach to someone who does not know HTML but wants to manage their own content.

So with this established, let's start talking about our handoff tools.

### Jekyll

Jekyll is a popular system that allows you to use Markdown to write content that it compiled and injected into special templates that make use of normal HTML/CSS. I discuss its best uses more on the [Project 2 instruction page](/activities/p2.html), so jump over there for a moment to get a sense of its use.

One thing to note are that Jekyll and Github work very well together thanks to special integrations enabled in Github Pages. This means that it is easy to maintain a special side branch for any project that uses Jekyll as a framework to populate a user-friendly "front end" for the repo. Developers who have built tools they are marketing to the world use this feature to contain this front end.

Another thing is that Jekyll is free and very lightweight, so it is a great tool to use as a next step for building sites you intend to hand off to clients. The client must have some level of comfort with working with code, but not nearly as much as would be needed to manage a completely static site like what you've built in our web program.

This said, check out the main [Jekyll documentation](https://jekyllrb.com/docs/home/) to learn more.

Watch this demonstration of some key features of Jekyll:

<iframe width="560" height="315" src="https://www.youtube.com/embed/AesJZ9gzvF8" frameborder="0" allowfullscreen></iframe>

Jekyll certainly has its limitations, but you might find it a great fit for your own personal site or for a site you will help in managing over time. Since it depends on some technical expertise, there are other tools that may be more approachable to non-technical clients.

### WordPress

While Jekyll makes use of a lot of technology you're already familiar with it still will require your client to learn a bit of technical skills to manage their sites. Some clients will love this... but many will not. And at the end of the day, many website simply demand more than Jekyll can offer.

For these reasons and many others, WordPress is one of the most popular content management systems in use today. This system was originally designed as a blogging tool but has grown extensively to include page features and a wide library of free and paid plugins to add all kinds of features. It also a robust theming system that gives designers a lot of flexibility.

While this system makes things very easy on your clients, the setup involved for you as a designer/developer can be a mixed bag, just depending on what your client expects to be in the site. As with Jekyll, I discuss WordPress's best uses more on the [Project 2 instruction page](/activities/p2.html), so jump over there for a moment to get a sense of its use.

Before I point you to the documentation for WordPress I want to point out that there at least three ways you can implement a site with WordPress:

1. You can sign up for an account at WordPress.com where you get a free subdomain from which you can administer a site very easily. But your ability to customize is somewhat limited here. Nonetheless this is a very easy way to experiment with WordPress and to get a site up quickly. You can also upgrade to paid accounts and connect a domain name as well as unlock additional customization.
2. Many hosting providers today offer a WordPress installation as a part of many default and inexpensive packages. This makes it very easy for you to purchase a domain name and hosting plan and then quickly set up WordPress through the hosting provider. This is good once you're a little more familiar with WordPress and can be just as fast as option 1, but even better for your clients since it is completely on a server they own and not dependent on the WordPress hosting.
2. You can download the WordPress source code itself from WordPress.org to do your own local development and then implement the site separately on a server using option 2, or by manually installing the same source files. This approach is helpful if you want to first build the site to test your own custom theme and configuration in a safe sandbox space separate from the client's live site. Then when you're ready you can recreate this setup on the live server, or at the least export your custom theme to upload and implement elsewhere.

With this said, make use of the following resources as you see fit:

* [Wordpress.com](https://wordpress.com/) for a guided hosted account setup
* [Wordpress.org](https://wordpress.org/) for source download and read technical documentation

Note that WordPress is huge, so this project is a great opportunity to just dabble with features and gain some familiarity with it. And if you're already familiar with WordPress, you can take this opportunity to explore it more.

When it comes specifically to WordPress themes, I've developed some documentation and a process students can follow on my [Web II website](http://vcd-3600.philschanely.com/wordpress-themes.html).

> Video demo coming soon. Will include:
> * Walkthrough of Wordpress features including pages, posts, themes, settings, and plugins.
> * Getting a local installation running for faster testing
> * Walkthrough of the theming system

### Fabricator (recommended)

With two common content management systems addressed that help with handoff to clients, this final tool allows us to switch gears and think about a different kind of handoff--that between designers and developers. The reality in the workplace today is that websites and web applications evolve and grow beyond our ability to keep up with designing each new page or feature.

A major trend for designers today is to shift to a "component design" mentality where, rather than designing whole page layouts, we design smaller interchangeable components. These usually all center around a consistent brand style guide, and implement a common grid system. But within this, we can do a lot of beneficial work to prescribe a variety of styles for block content (paragraphs, headings, lists, and variations of these), colors, a grid system, and basic components like buttons and form widgets. We can also design individual components such as product thumbnail tiles, navbars, and others that will vary from one project to the next.

Even more, the practice of "Design Ops" (short of operations and a nod to a parallel process on the development side of things) has emerged. Today, it is becoming very common for organizations to develop a Design System that incorporates visual style guides and a library of styled components as a foundation for developers and even additional design work.

[Here is a site](https://designsystemsrepo.com/) that catalogues a great number of prominent brand design systems.

The challenge becomes creating these component styles neatly in a stylesheet that can be plugged in by developers when they need it as well as creating thorough documentation that demonstrates use and provides the markup needed to build any of these components.

Thankfully, several tools exist for doing this, and a free, robust example is Fabricator. This provides a platform that allows you to author styles and markup snippets that are both compiled into a neat documentation site automatically, and packaged into a single CSS (and optionally a JS file too if you need it for some functionality).

Check out the [Fabricator site](http://fbrctr.github.io/) and [this video](https://www.youtube.com/watch?v=fLWhd7OedY0) where its inventor walks through its use.

I recommend that you try out this tool, and discuss some rationale on the [Project 2 instruction page](/activities/p2.html) so go there now and read through. This tool has already proven to be a huge asset for my professional work and communication with developers. At the start of a project now I walk through this process:

* I create style tiles to help the customer determine a style direction.
* I create more detailed style components that flesh this style out in more detail to consider all possible components I can imagine the site will need.
* I look through the wireframes for the project to choose a few key interfaces to design in full to try out the components I designed above as well as discover new ones.

With these design work complete and signed off on, then I use Fabricator to create HTML and CSS renderings of these components. Fabricator generates a clean documentation site that I can share with developers who will build out technical components. And if I'm going to be involved in front-end development, I use this site as a base for building things out.

Watch this video for an overview of Fabricator and examples of how I used it on a recent project:

<iframe width="560" height="315" src="https://www.youtube.com/embed/bv5fEu9Hpnc" frameborder="0" allowfullscreen></iframe>

Then as the project grows and changes, developers will ask for new components or new styles. I'll simply flesh them out in Sketch first if needed, then hop over and update the Fabricator source to include the new styles. Developers then just pull the latest stylesheet and can refer to the documentation as needed.
