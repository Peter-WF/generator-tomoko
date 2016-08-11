/**
 * Created by Peter on 16/8/8.
 */
var Utils = require('../lib/utils');

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: '* '.red + '请输入演示名称 :',
        validate: function (name) {
            if (name.length == 0) {
                return '演示名称不能为空';
            }
            if (Utils.ifExist(name)) {
                return '当前演示名称已存在';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '  请输入演示描述 : '
    }
];
