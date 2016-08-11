'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var basicExpected = [
    'doc/index.md',
    'examples/index/index.css',
    'examples/index/index.js',
    'examples/index/index.tpl',
    'src/image/logo.png',
    'src/less/index.less',
    'test/e2e/test.js',
    'component.json'
];

var jscmpExpected = [
    'api/api.yml',
    'src/javascript/util/index.js',
    'src/javascript/index.js',
    'src/template/index.tpl',
    'src/index.js',
    'test/unit/test.js'
];

var lesscmpExpected = [
    'src/index.less'
];

describe('generator-tomoko: create a js component', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                type: 'jscmp',
                name: 'jscmp',
                authorName: '王斐',
                authorEmail: 'wangfeia@zbj.com',
                group: 'fe-group',
                description: '组件描述'
            })
            .toPromise();
    });

    it('creates files', function () {
        assert.file(basicExpected.concat(jscmpExpected));
    });
});

describe('generator-tomoko: create a less component', function () {
    before(function () {
        return helpers.run(path.join(__dirname, "../generators/app"))
            .withPrompts({
                type: "lesscmp",
                name: 'lesscmp',
                authorName: '王斐',
                authorEmail: 'wangfeia@zbj.com',
                group: 'fe-group',
                description: '组件描述'
            })
            .toPromise();
    });
    it('creates files', function () {
        assert.file(basicExpected.concat(lesscmpExpected));
    });
});

//describe('generator-tomoko: add an example', function () {
//    before(function () {
//        return helpers.run(path.join(__dirname, "../generators/app"))
//            .withPrompts({
//                type: "lesscmp",
//                name: 'lesscmp',
//                authorName: '王斐',
//                authorEmail: 'wangfeia@zbj.com',
//                group: 'fe-group',
//                description: '组件描述'
//            })
//            .toPromise();
//    });
//    it('creates files', function () {
//        assert.file(basicExpected);
//    });
//});
