---
layout: layout/post.liquid
date: 2021-04-23
tags:
  - blog
  -
title: Setting up a blog-site using 11ty, first impressions
---

Every now and then I get this weird need to set myself up with a blog.

I've always been somewhat interested in writing. Especially about technology. I just never seem to get around to actually doing it. One of the things standing in my way has been the lack of a site suited for it.

No, there's no sudden shortage of blogging platforms. Rather, as a software engineer, especially one working with the web, I feel the need to build one myself.

So here's for firsts, building my own blog-site and writing it's first post.

## Choice of technology

Going for a static website generator seemed like a pretty good choise for a blog site. But there's an abundance of technologies.

Following the twitter tech-sphere, I've happened upon this neat little build tool called [11ty](https://www.11ty.dev) quite a few times as of late, so I figured it's worth a look.

I set out for this task with a couple of restrictions at mind:

- [ ] I want to be able to write the posts in my editor, using markdown.
- [ ] Development environment should be pretty simple.
- [ ] No hassle or a lot of javascript (one that I need to write, anyway)

11ty checked all of my boxes, so we've got our technology core right here.

There's actually a fairly good number of pre-made 11ty templates available for something like this. They're definitely worth checking out and will likely give you a nice running start.

For the sake of curiosity, this blog was set up from the scratch, following resources I've scrambled together from the web.

## An overview

It should be noted that I don't have a lot of experience dealing with similar blogging platforms so consider these notes against that background!

Low-dashed data-folders folders can be a bit confusing to deal with at first I guess. These are used to provide stuff like extra-data or templates to the 11ty-build.

### Layouts

Layouting itself is done using liquid templates people might be familiar with from Jekyll. 11ty actually supports several different templating languages and I mostly went with liquid due to the perceived simplicity.

### Configuration

`.eleventy.js` file is your go to file to setting up configuration options for your 11ty setup. This optional file might be used to set up special handling for different kinds of files and folders. You might also use it to reconfigure some of the defaults used by the build tool.

We'll be looking at the simplest possible configuration in the next section.

### Assets

Setting up asset building proved to be a relatively straight-forward task.

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
};
```

### Code-highlighting

I figured out this is something I can set up later, so the initial implementation includes simple handling for inline-code and code-blocks.

## Wins and challenges

Working without hefty JavaScript frameworks has its highs and lows. When things get complicated, you usually end up being leaps and bounds more productive. Frameworks provide useful and easy abstractions for developers to tackle common issues.

With 11ty, we're not too keen on dropping in tons of JavaScript to get things working. This revelation is accompanied by both good and bad times.

### Wins

It's pretty refreshing to mainly concern yourself with the css and html side of things. This blog does not need to concern itself with a state or rendering issues, everything we have here is provided in static resources.

`CSS-variables` are the bees knees.

### Challenges

An unexpected brain-teaser caught this JavaScript developers by surprise, how do I format the datetimes for my posts in the fashion I want.


## To sum up
