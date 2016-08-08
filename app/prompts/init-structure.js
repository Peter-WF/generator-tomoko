/**
 * Created by Peter on 16/8/8.
 */

var Utils = require('../lib/utils');

module.exports = [
    {
        type: 'list',
        name: 'type',
        message: '* '.red + '请选择组件类型 : ',
        choices: [
            {
                name: '纯 js 组件模板',
                value: 'js'
            },
            {
                name: '纯 css(less) 组件模板',
                value: 'less'
            }
        ],
        default: 'js',
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'name',
        message: '* '.red + '请输入组件名称 :',
        validate: function (name) {
            if (name.length == 0) {
                return '组件名称不能为空';
            }
            if (Utils.ifExist(name)) {
                return '当前组件名称已存在';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'authorName',
        message: '* '.red + '请输入作者姓名 : ',
        validate: function (name) {
            if (name.length == 0) {
                return '作者名不能为空';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'authorEmail',
        message: '* '.red + '请输入作者邮箱 : ',
        validate: function (value) {
            if (value.length == 0) {
                return '作者邮箱不能为空';
            }
            var pass = value.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if (pass) {
                return true;
            }
            return '请输入正确的邮箱';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '  请输入组件描述 : '
    }
];
