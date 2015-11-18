'use strict';

var fs = require('hexo-fs');
var isUrl = require('is-url');
var request = require('sync-request');
var fjs = require("functional.js");

function addhttp(url) {
  if (!/^(?:f|ht)tps?\:/.test(url)) {
    url = "http:" + url;
  }
  return url;
}

var ASSET_CACHE = {};

var asset_inline_filter = fjs.curry(
function (opening_tag, closing_tag, uri_attr, public_dir, $) {
  return function(index, element) {
    var inline = /__inline=true/;
    var uri = $(this).attr(uri_attr);

    if (!uri || !inline.test(uri)) {
      return;
    }

    if (isUrl(uri)) {
      try {
        var cached = ASSET_CACHE[uri];
        if (!cached) {
          var res = request('GET', addhttp(uri));
          cached = res.getBody();
          ASSET_CACHE[uri] = cached;
        }
        cached = cached.toString();
        cached = cached.replace(/<\/script>/g, "\\u003c/script\\u003e");
        var block = opening_tag + cached + closing_tag;
        $(this).replaceWith(block);
      } catch(err) {}
    } else {
      var path = uri.toString()/*.replace(/\?__inline=true/, "")*/;
      path = path.substring(0, path.indexOf('?'));
      var local_path = public_dir + path;
      var cached = ASSET_CACHE[local_path];
      var file_exists = true;
      if (!cached) {
        try {
          var file_exists = fs.existsSync(local_path);
          if (file_exists) {
            var cached = fs.readFileSync(local_path);
            ASSET_CACHE[local_path] = cached;
          }
        } catch(err) {
          file_exists = false;
        }
      }
      if (file_exists) {
        var block = opening_tag + cached + closing_tag;
        $(this).replaceWith(block);
      }
    }
  };
}
);

module.exports = asset_inline_filter;
