module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("src");
  // dir: {
  //   input: "src",
  // },
};