---
layout: layouts/post.liquid
date: 2021-05-11
tags: ['post', 'tip', 'highlight']
icon: 😍
author: Julius Rajala
title: Pull Requests for the caring developer
---

I've actually written a couple of iterations of a similar document over the years. It always seems to take a slightly different form but some of the content remains.

Every client I've worked with over the years has contributed some ideas to how I view the process. I'm pretty sure it will never reach a final form.

Code reviews have been proven to raise the overall quality of the code, time and again. But the process can still sometimes raise questions as to its effectivity.

I've heard negative thoughts on on the process from several developers, but the issues seem to have been mainly rooted in to how the prcoess is done. Not why.

## Why code reviews might suck

Miscommunication is often the root of all evil. Pull requests and code reviews are not exempt of the situation. When you approach the process, always keep in mind that communication is hard.

Benefit of the doubt gets you a long way.

### Common rules

Figuring out common rules for your teams process will get you a long way and help weed out feeligns of disgruntlement. It's a good idea to create your own document on your code review process and write down the shared rules and processes on how your team approaches the issue.

Feel free to use this document when discussing pull requests with your team.


## On the process of code reviews

In this short guide, we'll roughly look at the process of code reviews and pull requests in three parts.

1. Creating the pull request
2. Reviewing a pull request
3. Receiving a code review on your request


## 1. Creating Pull requests

- Consider your reviewer. It can be rough to receive a pull request the length of a short novel. Doing your best to split your reviewable code into chunks makes the process easier for everyone involved.
- In the case your code includes a break in convention, something curious or different requiring an explanation do your best to leave a meaningful comment explaining why.
- Pointing out issues you might have encountered in your implementation, possible bottlenecks for the future or other technical issues related to to the implementation can be very beneficial for the future.
- When working on frontend features, providing a gif or an image of the feature in question goes a long way and helps pin-point the changes in question.
- Remember to ask for reviews, don't assume them to happen. Nobody likes a stale pull request.

## 2. Writing a code review

Here's the tough part. It's definitely not easy to provide good reviews, but this is a learning process for us all.

- When commenting on a given pull request and finding something in need of changing, try to provide comments that describe **not only what** should change, **but why** something should change.
- Focus on the technical stuff.
- Pay mind to the language and tone of your review. We sometimes might misunderstand why something is implemented the way it is and we should definitely seek to clarify things in these situations. The tone can easily get lost in text.
    - Try to keep your tone friendly. You likely have a shared goal you're working towards.
    - When suggesting edits, try to phrase your edits as suggestions over commandments. It can help to point to your shared styleguide or code review documents.
- Figure out together with your team **What to pay attention to**. You can find an example below. Do discuss with your team to figure out what are the "issues of objective quality" for your team and what falls under issues of subjective quality for a clearer process.
- It's not always up to you, but try to get your reviews done in a timely manner.

## 3. Receiving a code review

- Commenting on code in a neutral way is hard, so do your best to understand the code review process as a way to maintain software quality. These comments are aimed at the code, not at you as a developer.
- When asked for more information on a specific solution, do your best not to be offended. **Reading code can be harder than writing code.** So it's best we work together to share the understanding.
    - [https://trishagee.github.io/presentation/reading_code/](https://trishagee.github.io/presentation/reading_code/)
    - [https://www.gamasutra.com/blogs/RobertDieterich/20121122/182156/Most_Programmers_Cant_Read_Code.php](https://www.gamasutra.com/blogs/RobertDieterich/20121122/182156/Most_Programmers_Cant_Read_Code.php)
- Use the feedback received as a learning experience, do your best to improve on the mistakes. Don't stress about them. This stuff happens.

## What to pay attention to

This section is largely subjective and dependent on the team an their set of rules. Please notice that these items might be different for each software development team. You should discuss with the team to set the common rules for your Pull reviews.

### Issues of objective quality

- Performance issues, memory leaks.
- Code cluttered with comments.
- Security issues
- **Issues agreed upon by the team.**

### Issues of subjective quality

- "Needless duplication"
- Naming conventions
- Variabilization (Not sure if this is a word)
- **Issues undecided on by the team.**

## Summary

It's pretty easy to summarise all of this. I find that doing your best to keep the process tolerable to all parties is the number one thing.

- A lot gets lost in text. Tone is everything, so try to be nice.
- Code reviews are about quality and shared ownership of the code.
- Discuss and decide on a shared set of rules with your team.

A lot of this is really pretty common sense stuff. Hopefully it'll still be of use to you.