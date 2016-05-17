/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-21 18:36
 */


'use strict';

var path = require('ydr-utils').path;
var fs = require('fs');
var assert = require('assert');
var typeis = require('ydr-utils').typeis;

var copy = require('../../utils/copy.js');

//var code = fs.readFileSync(file, 'utf8');
var srcDirname = path.join(__dirname, 'src/');
var file = path.join(srcDirname, 'copy.html');
var destDirname = path.join(__dirname, 'dest/');
//var destResourceDirname = path.join(destDirname, 'res');


describe('utils/copy.js', function () {
    it('copy', function () {
        var ret = copy(file, {
            srcDirname: srcDirname,
            destDirname: destDirname,
            copyPath: true,
            version: true
        });

        console.log(ret);
        assert.equal(typeis.file(ret), true);
    });
});


