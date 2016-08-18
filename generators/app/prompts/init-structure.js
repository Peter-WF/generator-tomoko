/**
 * Created by Peter on 16/8/8.
 */

var Utils = require('../lib/utils');

var userInfo = Utils.getGitConfig().user;

module.exports = [
    {
        type: 'list',
        name: 'type',
        message: '* '.red + '请选择组件类型 : ',
        choices: [
            {
                name: 'js 组件模板',
                value: 'jscmp'
            },
            {
                name: 'css(less) 组件模板',
                value: 'lesscmp'
            }
        ],
        default: 'jscmp',
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
        default: Utils.getGitConfig('user.name'),
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
        default: Utils.getGitConfig('user.email'),
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
        name: 'group',
        message: '* '.red + '请输入组件分组名 : ',
        validate: function (value) {
            if (value.length == 0) {
                return '组件分组名不能为空';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '  请输入组件描述 : '
    }
];
