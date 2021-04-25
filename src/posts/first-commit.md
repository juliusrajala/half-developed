---
layout: layouts/post.liquid
date: 2021-04-23
tags: ['post']
icon: 🛠
author: Julius Rajala
title: Setting up a blog-site using 11ty, first impressions
---

Every now and then I get this weird need to set myself up with a blog.

I've always been somewhat interested in writing. Especially about technology. I just never seem to get around to actually doing it. One of the things standing in my way has been the lack of a site suited for it.

No, there's no sudden shortage of blogging platforms. As a software engineer, re-inventing the wheel is part, if not all of the fun though, hence I'll steer away from the WordPress-sites and whatnots. I'm sure they're decent platforms though.

## Choice of technology

Picking a technology for your site these days is like going to the candy store. There's a lot of options.

I gathered together a list of some of the requirements I had with regards to the technologies used.

### Requirements:

- Posts should be written in markdown format due to familiarity with the platform.
- Development environment should be:
  - Simple to use and set up
  - Builds should be fast
  - Comfortable, ie. I'd love hot reloading
- Low amount of JavaScript *(That I need to write)*

With these specs at hand, I set out to find me the perfect technology for this site.

I made a conscious decisions to avoid the technologies of the React-verse. Not that there's anything wrong with Gatsby or Next for instance. I've worked with different React-variants and applications over the last few years and enjoy any refreshments I can get from the world of `JSX`.

### Enter 11ty

Following the twitter tech-sphere, I've happened upon this neat little build tool called [11ty](https://www.11ty.dev) quite a few times as of late, so I figured it's worth a look.

A short inspection revealed that 11ty also checked all of my boxes above, so I figured this is as good a time as any to give it a go.

There's actually a fairly good number of pre-made 11ty templates available for something like this. They're definitely worth checking out and will likely give you a nice running start.

For the sake of curiosity, this blog was built from the ground scratch, following resources I've scrambled together from the web.

## An overview

It should be noted that I don't have a lot of experience dealing with similar blogging platforms so consider these notes against that background!

Low-dashed data-folders folders can be a bit confusing to deal with at first I guess. These are used to provide stuff like extra-data or templates to the 11ty-build.

### Layouts

Layouting itself is done using liquid templates people might be familiar with from Jekyll. 11ty actually supports several different templating languages and I mostly went with liquid due to the perceived simplicity.

### Assets

Since I'd like to see some custom styles and fonts on this blog, asset-management became a valid question quite soon. This brings us to doing a bit of customization on our 11ty-site. So let's jump into the wonderful world of configuration next.

### Configuration

`.eleventy.js` file is your go to file to setting up configuration options for your 11ty setup. This optional file might be used to set up special handling for different kinds of files and folders. You might also use it to reconfigure some of the defaults used by the build tool.

The eleventyConfig received as a parameter provides a bunch of different methods to include extra functionality to your 11ty-configuration.

The following snippet is an example of my original `.eleventy.js` set-up. Providing functionality for passing assets forward.

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
};
```

Besides the methods available to us on the `eleventyConfig` parameter, we can also extend our code


### Code-highlighting

I figured out this is something I can set up later, so the initial implementation includes simple handling for inline-code and code-blocks.

## Challenges and wins

Working without hefty JavaScript frameworks has its highs and lows. When things get complicated, you usually end up being leaps and bounds more productive. Frameworks provide useful and easy abstractions for developers to tackle common issues.

With 11ty, we're not too keen on dropping in tons of JavaScript to get things working. This revelation is accompanied by both good and bad times.

### Wins

It's pretty refreshing to mainly concern yourself with the css and html side of things. This blog does not need to concern itself with a state or rendering issues, everything we have here is provided in static resources.

`CSS-variables` are the bees knees.

### Challenges

- Splitting template contents correctly
- Formatting dates

## Sum up


