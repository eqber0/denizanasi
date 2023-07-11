const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/*")
  eleventyConfig.addPassthroughCopy("./src/images")
  eleventyConfig.addPassthroughCopy("./src/wp-content")
  eleventyConfig.addPassthroughCopy("./src/wp-includes")

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
