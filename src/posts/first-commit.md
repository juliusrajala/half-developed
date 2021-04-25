---
layout: layouts/post.liquid
date: 2021-04-23
tags: ['post']
icon: 🛠
title: Setting up a blog-site using 11ty, first impressions
---

Every now and then I get this weird need to set myself up with a blog.

I've always been somewhat interested in writing. Especially about technology. I just never seem to get around to actually doing it. One of the things standing in my way has been the lack of a site suited for it.

No, there's no sudden shortage of blogging platforms. Rather, as a software engineer, especially one working with the web, I feel the need to build one myself.

So here's for firsts, building my own blog-site and writing it's first post.

## Choice of technology

Going for a static website generator seemed like a pretty good choise for a blog site. But there's an abundance of technologies.

I gathered together a list of some of the requirements I had with regards to the technologies used.

### Requirements:

- Posts should be written in markdown format due to familiarity with the platform.
- Development environment should be:
  - Simple
  - Snappy
  - Comfortable, ie. Hot reload,
- Low amount of JavaScript *(That I need to write)*

### Enter 11ty

Following the twitter tech-sphere, I've happened upon this neat little build tool called [11ty](https://www.11ty.dev) quite a few times as of late, so I figured it's worth a look. 11ty also checks all of my boxes above, so I figured this is as good a time as any to give it a go.

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

The following snippet is an example of my original `.eleventy.js` set-up. The eleventyConfig received as a parameter provides a bunch of different methods to include extra functionality to your 11ty-configuration.

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
};
```

### Code-highlighting

I figured out this is something I can set up later, so the initial implementation includes simple handling for inline-code and code-blocks.

## Challenges and wins

Working without hefty JavaScript frameworks has its highs and lows. When things get complicated, you usually end up being leaps and bounds more productive. Frameworks provide useful and easy abstractions for developers to tackle common issues.

With 11ty, we're not too keen on dropping in tons of JavaScript to get things working. This revelation is accompanied by both good and bad times.

### Wins

It's pretty refreshing to mainly concern yourself with the css and html side of things. This blog does not need to concern itself with a state or rendering issues, everything we have here is provided in static resources.

`CSS-variables` are the bees knees.

### Challenges

An unexpected brain-teaser caught this JavaScript developers by surprise, how do I format the datetimes for my posts in the fashion I want.


## Sum up

