/**
 * Created by Peter on 16/8/8.
 */

var gitConfig = require('git-config');
var _ = require('lodash');

module.exports = {
    ifExist: ifExist,
    getGitConfig: getGitConfig
};

// 判断组件名是否存在
function ifExist() {

    return false;
}
/**
 * 返回 gitconfig
 * @param  {String}                         key                          获取指定键值
 */
function getGitConfig(key) {
    var gitConfigObj = gitConfig.sync();
    if (key) {
        return _.get(gitConfigObj, key);
    }
    return gitConfigObj;
}
