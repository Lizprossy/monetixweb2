
  module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("images/*.jpg");
    eleventyConfig.addPassthroughCopy("images/*.png");
    eleventyConfig.addPassthroughCopy("images/*.mp4");
    eleventyConfig.addPassthroughCopy("images/*.pdf");
    // return object options in the object starting on the line below
    return {};
  };