var Metalsmith = require('metalsmith'),
  Handlebars = require('handlebars'),
  drafts = require('metalsmith-drafts'),
  collections = require('metalsmith-collections'),
  markdown = require('metalsmith-markdown'),
  excerpts = require('metalsmith-excerpts'),
  permalinks = require('metalsmith-permalinks'),
  less = require('metalsmith-less'),
  templates = require('metalsmith-templates'),
  ignore = require('metalsmith-ignore'),
  msIf = require('metalsmith-if'),
  serve = require('metalsmith-serve'),
  watch = require('metalsmith-watch'),
  siteConfig = require('./config/site')(process.argv)

Handlebars.registerHelper('link', function (path) {
  return siteConfig.baseUrl + path
})

Metalsmith(__dirname)
  .source('./src')
  .use(drafts())
  .use(collections(require('./config/collections')))
  .use(markdown())
  .use(excerpts())
  .use(permalinks(require('./config/permalinks')))
  .use(less(require('./config/less')))
  .use(templates(require('./config/templates')))
  .use(ignore(require('./config/ignore')))
  .use(msIf(siteConfig.isDev, serve(require('./config/serve'))))
  .use(msIf(siteConfig.isDev, watch(require('./config/watch'))))
  .destination('./build')
  .build(function (err) {
    if (err) throw err
  })
