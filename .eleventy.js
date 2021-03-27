module.exports = (eleventyCFG) => {
  eleventyCFG.addPassthroughCopy("src/assets");
  eleventyCFG.addPassthroughCopy("src/utils");
  return {
      dir: {
          input: "src",
      }
  };
};