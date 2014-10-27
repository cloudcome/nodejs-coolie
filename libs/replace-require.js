/*!
 * 替换 require 字符串
 * @author ydr.me
 * @create 2014-10-23 20:50
 */


"use strict";

var util = require("./util");
var log = require("./log");
var REG_DEFINE = /\bdefine.*\bfunction[^(]*\(([^,)]*)/;


/**
 * 替换 require
 * @param file
 * @param code 代码必须先进行压缩过后的，保证没有其他注释干扰
 * @param depNameList 依赖数组
 * @param depName2IdMap 依赖对应表
 */
module.exports = function (file, code, depNameList, depName2IdMap) {
    var requireVar = _getRequireVar(code);

    if (!requireVar && depNameList.length) {
        log('replace require', 'can not found require variable, but used', 'error');
        process.exit();
    }

    depNameList.forEach(function (depName) {
        var reg = _buildReg(requireVar, depName);
        var id = depName2IdMap[depName];

        if (!id) {
            log("replace require", util.fixPath(file), "error");
            log("replace require", "can not found `" + depName + "` map", "error");
            process.exit();
        }

        code = code.replace(reg, requireVar + "(\"" + depName2IdMap[depName] + "\")");
    });

    return code;
};


/**
 * 提取 define 里的 require 变量
 * define("index.js",["1"],function(s,e,i){"use strict";s("../libs/all.js");console.log("app/index.js")});
 * @private
 */
function _getRequireVar(str) {
    return (str.match(REG_DEFINE) || ["", ""])[1].trim();
}


/**
 * 生成正则
 * @param dep
 * @returns {RegExp}
 * @private
 */
function _buildReg(requireVar, dep) {
    dep = util.fixRegExp(dep).trim();

    return new RegExp("\\b" + util.fixRegExp(requireVar) + "\\(['\"]" + dep + "['\"]\\)");
}
