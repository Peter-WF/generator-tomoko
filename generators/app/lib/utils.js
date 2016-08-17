/**
 * Created by Peter on 16/8/8.
 */

var gitConfig = require('git-config');

module.exports = {
    ifExist: ifExist,
    getGitConfig: getGitConfig
};

// 判断组件名是否存在
function ifExist() {

    return false;
}
function getGitConfig() {
    return gitConfig.sync();
}
