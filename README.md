# hexo-filter-asset-inline

[![npm](https://img.shields.io/npm/v/hexo-filter-asset-inline.svg)](https://npmjs.org/package/hexo-filter-asset-inline)
[![npm](https://img.shields.io/npm/dt/hexo-filter-asset-inline.svg)](https://npmjs.org/package/hexo-filter-asset-inline)
[![Build Status](https://img.shields.io/travis/JamesPan/hexo-filter-asset-inline.svg)](https://travis-ci.org/JamesPan/hexo-filter-asset-inline)
[![NPM Dependencies](https://img.shields.io/david/JamesPan/hexo-filter-asset-inline.svg)](https://www.npmjs.com/package/hexo-filter-asset-inline)
[![Coverage Status](https://img.shields.io/coveralls/JamesPan/hexo-filter-asset-inline.svg)](https://coveralls.io/r/JamesPan/hexo-filter-asset-inline)
![](https://img.shields.io/npm/l/hexo-filter-asset-inline.svg)


Inline remote and local asset files when generate site. Supports CSS and JS files.

## Instalation
To install `hexo-filter-asset-inline` run:

```bash
npm install hexo-filter-asset-inline --save
```

## Usage

Append `__inline=true` to the URL or relative path of asset file. Make sure `__inline=true` is at the end of path or URL.

Examples:

For local css with relative path.

```html
<link rel="stylesheet" type="text/css" href="/css/a.css?__inline=true"><!--will be inlined-->
<link rel="stylesheet" type="text/css" href="/css/a.css"><!--will not inlined-->
<link rel="stylesheet" type="text/css" href="/css/a.css?__inline=false"><!--will not inlined-->
```

For remote css with URL.

```html
<link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/highlight.js/8.4/styles/github.min.css?__inline=true"><!--will be inlined-->
<link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/highlight.js/8.4/styles/github.min.css"><!--will not inlined-->
<link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/highlight.js/8.4/styles/github.min.css?__inline=false"><!--will not inlined-->
```

For local js with relative path.

```html
<script type="text/javascript" src="/js/a.js?__inline=true"></script><!--will be inlined-->
<script type="text/javascript" src="/js/a.js"></script><!--will not inlined-->
<script type="text/javascript" src="/js/a.js?__inline=false"></script><!--will not inlined-->
```

For remote js with URL.

```html
<script type="text/javascript" src="//cdn.bootcss.com/highlight.js/8.9.1/highlight.min.js?__inline=true"></script><!--will be inlined-->
<script type="text/javascript" src="//cdn.bootcss.com/highlight.js/8.9.1/highlight.min.js"></script><!--will not inlined-->
<script type="text/javascript" src="//cdn.bootcss.com/highlight.js/8.9.1/highlight.min.js?__inline=false"></script><!--will not inlined-->
```


