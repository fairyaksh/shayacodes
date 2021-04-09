module.exports = (eleventyCFG) => {
  eleventyCFG.addPassthroughCopy("src/assets");
  return {
      dir: {
          input: "src",
      }
  };
};