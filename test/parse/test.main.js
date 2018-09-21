/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-27 11:21
 */


'use strict';

var assert = require('assert');
var path = require('blear.node.path');

var parseMain = require('../../src/parse/main.js');

var srcDirname = path.join(__dirname, '../../example/src/');

describe('parse/main.js', function () {
    it('e', function () {
        var mainMap = parseMain({
            glob: [
                "./static/js/app/**"
            ],
            srcDirname: srcDirname
        });

        console.log(mainMap);
    });
});


