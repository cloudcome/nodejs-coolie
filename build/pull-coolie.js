/*!
 * pull coolie.min.js from github
 * @author ydr.me
 * @create 2014-12-11 17:28
 */

'use strict';

var path = require('path');
var fs = require('fs');
var request = require('ydr-utils').request;
var pkg = require('../package.json');
var log = require('../libs/log.js');

module.exports = function (basedir) {
    var writeFile = path.join(basedir, "./coolie.min.js");
    var writeStream = fs.createWriteStream(writeFile);
    var url = pkg.coolie;

    log('pull coolie.min.js', url);
    request.down(pkg.coolie, function (err, stream) {
        if (err) {
            log('pull coolie.min.js', url, 'error');
            log('pull coolie.min.js', err.message, 'error');
            process.exit();
        }

        stream.pipe(writeStream).on('error', function (err) {
            log('pull coolie.min.js', url, 'error');
            log('pull coolie.min.js', err.message, 'error');
            process.exit();
        }).on('close', function () {
            log('pull coolie.min.js', writeFile, 'success');
            process.exit();
        });
    });
};