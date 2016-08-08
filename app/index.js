/**
 * Created by Peter on 16/8/8.
 */

var path = require('path');
var generators = require('yeoman-generator');
var colors = require('colors');

var utils = require('./lib/utils');

//var prompts = require('./prompts');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);


        this.props = {};
        /* // Next, add your custom code
         this.option('coffee'); // This method adds support for a `--coffee` flag
         this.destinationRoot('node-zbj');
         this.log( this.templatePath())
         */
        /* this.log(this.config);
         this.log(this.options);
         this.log(this);*/
    },
    //输入提示
    prompting: {
        askComponentName: function () {
            if (this.name) {
                return;
            }
            var next = this.async();

            // Handle setting the root early, so .yo-rc.json ends up the right place.
            this.prompt({
                type: 'input',
                name: 'name',
                message: '* '.red + '请输入组件名称 :',
                validate: function (name) {
                    if (name.length == 0) {
                        return '组件名称不能为空';
                    }
                    if (utils.ifExist(name)) {
                        return '当前组件名称已存在';
                    }
                    return true;
                }
            }).then(function (props) {
                this.props.name = props.name;
                next();
            }.bind(this));
        },
        setComponentName: function () {
            var name = this.props.name;
            //if (name.indexOf('nodejs-') < 0) {
            //    name = 'nodejs-' + name;
            //}
            //this.props.name = name;
            var oldRoot = this.destinationRoot();
            if (path.basename(oldRoot) !== name) {
                this.destinationRoot(path.join(oldRoot, name));
            }
        },
        askFor: function () {
            //var next = this.async();
            //this.prompt(prompts, function (props) {
            //    for (var key in props) {
            //        this.props[key] = props[key];
            //    }
            //    next();
            //}.bind(this));
        }
    },

    writing: {
        copyApp: function () {
            var tempPath = this.templatePath();
            console.log(tempPath);
            this.fs.copyTpl(
                this.templatePath(),
                this.destinationPath(),
                this.props
            );
        },
        pkgFile: function () {
            var pkg = this.fs.readJSON(this.destinationPath('component.json'), {});
            pkg.name = this.props.name;
            pkg.author = pkg.author || this.props.author;
            pkg.description = pkg.description || this.props.description;
            this.fs.writeJSON(this.destinationPath('package.json'), pkg);
        }
    },
    install: {
        /* installNpm:function(){
         this.installDependencies();
         }*/
    },
    end: function () {
        this.log(('Component "' + this.props.name + '" generator success').green);
        //this.log(('    $cd ' + this.props.name).green);
        //this.log(('    $npm install').green);
        //this.log(('    $npm start').green);
        //this.log(('Visit url: http://localhost:3000/index').underline);
    },

    //_开头的方法不参与generator
    _mergeArr: function (arr, arr2) {
        arr = arr || [];
        arr2 = arr2 || [];
        arr2.forEach(function (item) {
            if (arr.indexOf(item) == -1) {
                arr.push(item);
            }
        });
        return arr;
    }
});

