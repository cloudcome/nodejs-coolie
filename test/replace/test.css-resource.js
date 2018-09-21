/**
 * 替换 css 资源
 * @author ydr.me
 * @create 2015-10-22 16:01
 */


'use strict';

var path = require('blear.node.path');
var fs = require('fs');
var assert = require('assert');

var replaceCSSResource = require('../../src/replace/css-resource.js');
var file = path.join(__dirname, 'src/css-resource.css');

var code = fs.readFileSync(file, 'utf8');
var srcDirname = path.join(__dirname, 'src/');
var destDirname = path.join(__dirname, 'dest/');
var destResourceDirname = path.join(destDirname, '/static/res');
var destCSSDirname = path.join(destDirname, '/static/css');


describe('replace/css-resource.js', function () {
    it('e', function () {
        var ret = replaceCSSResource(file, {
            versionLength: 16,
            srcDirname: srcDirname,
            destDirname: destDirname,
            destResourceDirname: destResourceDirname,
            destCSSDirname: destCSSDirname,
            destHost: '/',
            code: code,
            returnObject: true
        });

        console.log(ret);

        ret.resList.forEach(function (file) {
            assert.equal(path.isFile(file), true);
            try {
                fs.unlinkSync(file);
            } catch (err) {
                // ignore
            }
        });
    });
});


