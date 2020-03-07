const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  const options = {
    html: true,
    breaks: true,
    linkify: true
  };

  const opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toDateString();
  });

  eleventyConfig.addFilter("markdownify", function(value) {
    const md = new markdownIt(options);
    return md.render(value);
  });
};
