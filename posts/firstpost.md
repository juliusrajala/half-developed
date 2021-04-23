---
layout: layout.liquid
date: 2021-04-23
tags: ['blog', '11ty']
title: Playing around with 11ty
---
# {{ title }}

Every now and then I get this weird need to set myself up with a blog.

I've always been somewhat interested in writing. Especially about technology. I just never seem to get around to actually doing it. One of the things standing in my way has been the lack of a site suited for it.

No, there's no sudden shortage of blogging platforms. Rather, as a software engineer, especially one working with the web, I feel the need to build one myself.

So here's for firsts, building my own blog-site and writing it's first post.

## Choise of technology

Going for a static website generator seemed like a pretty good choise for a blog site. But there's an abundance of technologies.

Following the twitter tech-sphere, I've happened upon this neat little build tool called 11ty quite a few times as of late, so I figured I'd give it a peak.

I set out for this task with a couple of restrictions at mind:

- [ ] I want to be able to write the posts in my editor, using markdown.
- [ ] Development environment should be pretty simple.
- [ ] No hassle or a lot of javascript (one that I need to write, anyway)

11ty checked all of my boxes, so we've got our technology core right here.

## First impressions

It should be noted that I don't have a lot of experience dealing with similar blogging platforms so consider these notes against that background!

Low-dashed data-folders folders can be a bit confusing to deal with at first I guess. These are used to provide stuff like extra-data or templates to the 11ty-build.