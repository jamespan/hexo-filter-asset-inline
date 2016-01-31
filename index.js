'use strict';

var cheerio = require('cheerio');

var inline_css = require('./lib/inline-css');
var inline_js = require('./lib/inline-js');

hexo.extend.filter.register('after_render:html', function(source) {
  if (hexo.config.asset_inline && !hexo.config.asset_inline.enable) {
    return source;
  }
  var $ = cheerio.load(source);
  $('link[rel=stylesheet]').each(inline_css(hexo.config.public_dir, $));
  $('script').each(inline_js(hexo.config.public_dir, $));
  return $.html({decodeEntities: false});
});
