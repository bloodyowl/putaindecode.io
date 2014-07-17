/**
 * paths configuration
 */
module.exports = {
  sources : {
    pages : "src/pages/**/**/**.jade",
    pagesMd : "src/pages/**/**/**.md",
    feed : "src/feed/feed.jade",
    sitemap : "src/layouts/sitemap.jade",
    pagesRoot : "src/pages/",
    partials : "src/partials/**/*.jade",
    mixins : "src/mixins/**/*.jade",
    layouts : "src/layouts/**/*.jade",
    lang : "src/lang/index.json",
    icons : "src/**/icons/*.svg",
    stylesheets : "src/stylesheets/",
    scripts : "src/scripts/**/*.js",
    libScripts : "src/scripts/lib/**/*.js",
    mainScript : "src/scripts/index.js",
    fonts : "src/fonts/**/*",
    images : "src/images/**/*",
    tasks : "tasks/**/*.js",
    tests : "test/**/*.js",
    public : ["src/public/.**", "src/public/**"]
  },

  tmp : "tmp/",

  dist : {
    pages : "dist/",
    public : "dist/",
    icons : "fonts/",
    fonts : "dist/fonts/",
    images : "dist/images/",
    stylesheets : "dist/stylesheets/",
    scripts : "dist/scripts"
  }
}
