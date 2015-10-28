/**
 * 文件描述
 * @author ydr.me
 * @create 2015-10-28 11:24
 */


'use strict';

var path = require('path');
var assert = require('assert');

var parseCoolieConfig = require('../../parse/coolie.config.js');

var srcDirname = path.join(__dirname, '../../example/src/');

describe('parse/coolie.config.js', function () {
    it('e', function () {
        var ret = parseCoolieConfig({
            srcDirname: srcDirname
        });

        console.log(JSON.stringify(ret, null, 4));
    });
});


