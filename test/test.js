var chai = require('chai');
var fs = require('fs');
var cheerio = require('cheerio');

var inline_css = require('../lib/inline-css');
var inline_js = require('../lib/inline-js');

var expect = chai.expect;

describe('Inline', function() {
    describe('CSS', function() {
        it('inline local css file', function() {
            var content = fs.readFileSync("test/fixture/index4local_css.html");
            var $ = cheerio.load(content);
            $('link[rel=stylesheet]').each(inline_css("test/fixture", $));
            expect($.html()).to.equals(cheerio.load(fs.readFileSync("test/fixture/index4local_css_result.html")).html());
        });
        it('inline remote css file', function() {
            var content = fs.readFileSync("test/fixture/index4remote_css.html");
            var $ = cheerio.load(content);
            $('link[rel=stylesheet]').each(inline_css("test/fixture", $));
            expect($.html()).to.equals(cheerio.load(fs.readFileSync("test/fixture/index4remote_css_result.html")).html());
        });
    });
    describe('JS', function() {
        it('inline local js file', function() {
            var content = fs.readFileSync("test/fixture/index4local_js.html");
            var $ = cheerio.load(content);
            $('script').each(inline_js("test/fixture", $));
            expect($.html()).to.equals(cheerio.load(fs.readFileSync("test/fixture/index4local_js_result.html")).html());
        });it('inline remote js file', function() {
            var content = fs.readFileSync("test/fixture/index4remote_js.html");
            var $ = cheerio.load(content);

            $('script').each(inline_js("test/fixture", $));
            //console.log($.html());
            expect($.html()).to.equals(cheerio.load(fs.readFileSync("test/fixture/index4remote_js_result.html")).html());
        });
    });
});