---
title: Project 2
type: projects
---
# Overview

This project gives you the chance to learn about some more complex website building systems or tools that assist with building large sites.
You will have the choice to work with one of the following, and the one you choose will orient you towards a certain kind of project.

Here are your overall benchmarks (specifics will vary depending on the option you select and the project you build):

* By end of week one, select one of the options below, begin related research, and create draft design documents or other related site plans.
* By end of week two, complete research and begin actual development work, keeping your professor posted on your progress.
* By end of week three, finish and deploy your site or final assets.

## Option 1: Jekyll

Jekyll is a logical next step for someone moving into automated website systems as it only adds a few new technologies onto what you already know about HTMl, CSS, and JavaScript. But it also has limitations that keep it in the general category of "static" websites---those that you generate as a developer/designer and deploy yourself.
This means that if you have a client project where the client does not want to edit the site themselves and does not have complicated dreams for their site, this could be a good fit. If the client is technically inclined it is feasible that you could train them to manage content since Jekyll content is written in Markdown. This said, choose to work with Jekyll on this project if you have one of the following kinds of projects in mind:

* A content-oriented website (no fancy user functionality features like e-commerce, etc.). Many of the projects you might have completed in other web courses fit well in the Jekyll feature set.
* Your own personal portfolio or blog. Jekyll is particularly nice step if you have serial content such as blog posts or portfolio items you will continue to add to over time.

Do not use Jekyll in the following situations:

* If you need a tightly-integrated e-commerce website. Jekyll does not have any server-side code by default to support authentication, database storage, or other dynamic features.
* If your client wants to manage their content themselves over time and is not moderately technically savvy. Jekyll expects content managers to be comfortable with a text editor and writing in Markdown.

If you choose Jekyll you must do the following in order to complete this project:

* Create a Github repo and use it to track your work on the site.
* Install Jekyll in your local instance of the repo and use it to build your website. A successful project should contain at least 5 pages (ideally more), some of which must be serial content generated using the Jekyll build system (blog posts, portfolio pieces, etc.)
* Work with your professor to consider how to deploy the finished site.

## Option 2: WordPress

WordPress is another logical step for designer/developers looking to build real-world websites. It is extremely popular and very well-documented. While it runs on PHP/MySQL server technology you don't have to know these technologies well to work with WordPress. You can really vary how much you get involved with the code itself, from writing absolutely no code, to doing a high level of customization. Therefore, you can jump right in and create a WordPress site without knowing much about it---its built with non-technical users in mind. But many design agencies out there have developed proficiency with doing lots of customizations with WordPress, making it one of the leading go-to sites. With this in mind, WordPress is a great option in the following situations:

* You have a client who expects to maintain their site's content over time. A little training will be needed, but it is a very approachable system for this.
* You have a project that will have multiple contributing users who each will need a safe system they can log into to add new content and manage how that content is published and when. WordPress allows for an author/editor workflow that can help with larger content-oriented sites.
* You have a project that demands some advanced functionality such as a contact form, newsletter subscription, or some basic e-commerce. WordPress has an expansive library of well-written plugins that allow you to add on many nice features. And since it is already depending on server technologies you can ever write your own plugins (if you feel so inclined...)
* You want to get a website up and running very quickly that you then customize and expand over time. WordPress is easy to set up in a few minutes but has a ton of features you can expand on later. You can also install free themes to customize the look and feel or purchase them for a reasonable price and then customize them later, as opposed to having to build from scratch.

Do not use Jekyll in the following situations:

* If your client has very complex author/publisher workflows in mind. A commercial, paid product is likely going to be a better fit. For example, Cedarville uses the complex and costly system called SiteCore to administer its website.
* If your client has a very large and complex e-commerce plan. In this case, a commercial, paid product is likely to be a better fit. Products range like Shopify, Salesforce, or some powered by Google or Amazon will likely be better for them in the long run.
* If your client doesn't know what they want, but seems to have simpler hopes up front. Better to start with a leaner solution like Jekyll and upgrade to something else down the road.

If you choose Wordpress you must do the following in order to complete this project:

* Hosted option (if you're new to WP):
  * Create a free hosted site on WordPress.com. Ensure that the professor is allowed administrative access to the site in order to review and assist as needed.
  * Set up a fully functional website using the Pages and/or Posts features of the system
  * Find and install a free theme beyond those available by default in the system. You are welcome to purchase one but not required to do so.
* Customized option (if you worked with WP in a previous class or other setting):
  * Work with your prof to identify where you will deploy or host the finished website.
  * Set up a fully functional local testing version of the site on your computer and plan to use the import/export features to port content between your sandbox and production setups as needed.
  * Either customize an existing theme or create your own. Use a Github repo to track your custom theme work.

## Option 3: Fabricator (recommended)

In a totally different category of work, Fabricator does not help you build a website. Instead, it helps you build a CSS/JS framework (similar to Bootstrap, Gumby, or Materialize) that can be used by you or others to assemble a larger website consistently. Choose Fabricator for this project for the following contexts:

* You would like to do a redesign of a very large website without actually rebuilding the whole thing. With Fabricator, you can prescribe styles and markup technique for a large website and provide example pages that others can use as a reference when they build out the site.
* You would like to build a UI toolkit for a complex web application that you might not have the skills to develop yourself, but want to develop the interface. Fabricator allows you to set up components that developers can plug and play into the application, ensuring a consistent look and feel.
* You simply want to try your hand at building a toolkit for a hypothetical site.

If you choose Fabricator you must do the following in order to complete this project:

* Develop a robust design style set first using design tools such as Sketch. Review this with your professor before moving into Fabricator. Include the following in your considerations:
  * Grid system (columns and baseline grid)
  * Color system
  * Type styles (headings, paragraphs, lists, quotes, links, form fields and labels, other site-specific needs)
  * Buttons and form widgets
  * Image treatments
  * Custom components based on the needs of the site, such as page banners, navigation bars, sidebars, footer, etc.
