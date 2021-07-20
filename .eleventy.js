const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.addPassthroughCopy('src/css/');

  eleventyConfig.addFilter('dateReadable', date => {
    return new Date(date).toLocaleDateString()
  })

  eleventyConfig.addFilter('buildDate', () => {
    return new Date().toLocaleDateString().split('/').join('.')
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
};