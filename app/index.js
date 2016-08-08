/**
 * Created by Peter on 16/8/8.
 */
/*
 *https://segmentfault.com/a/1190000002630463
 initializing - 你的初始化函数，就是构造函数，主要就是检查一下参数什么的
 prompting - 给用户展示你的菜单，选点东西什么的
 configuring - 保存配置信息，创建类似.editorconfig的文件
 default - 就是默认，只要不在这个列表里的函数都在这个位置执行
 writing - 创建模板文件
 conflicts - 处理异常和冲突
 install - 装npm和bower依赖什么的
 end - 打个命令行祝贺使用者成功了

 * */

var path = require('path');
var generators = require('yeoman-generator');
var colors = require('colors');

// 用于存放提示信息
var prompts = [];


module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);

        // 用于记录模板对象
        this.props = {};

        this.argument('ifAddExample',
            {
                desc: "用于标识当前操作是否是添加示例",
                type: String,
                defaults: "false"
            });
    },
    //输入提示
    prompting: {
        // 初始化配置信息
        initConfig: function () {
            // 判断是否是添加示例
            if (this.ifAddExample === "false") {
                // 初始化提示信息
                prompts = require('./prompts/init-structure');
            } else {
                var pkg = this.fs.readJSON(this.destinationPath('component.json'), {});
                console.log(JSON.stringify(pkg, null, '  '));
                if (pkg.name) {
                    // 初始化提示信息
                    prompts = require('./prompts/add-example');
                    // 初始化模板类型
                    this.props.type = "example";

                    // 从组件配置信息中获取用户信息
                    this.props.authorName = pkg.author;
                    this.props.authorEmail = pkg.email;
                } else {
                    throw Error("请在组件文件夹内创建示例".red);
                }
            }
        },
        /**
         * 遍历 prompts ,并将用户输入绑定至 this.props
         */
        askFor: function () {
            var next = this.async();
            this.prompt(prompts).then(function (props) {
                for (var key in props) {
                    //排除原型链中的属性
                    if (props.hasOwnProperty(key)) {
                        this.props[key] = props[key];
                    }
                }
                next();
            }.bind(this));
        },
        /**
         * 根据 组件名/示例名 设置目标路径
         */
        setDestinationRoot: function () {
            var oldRoot = "";
            var name = this.props.name;
            if (this.ifAddExample === "false") {
                oldRoot = this.destinationRoot()
            } else {
                oldRoot = this.destinationRoot() + "/examples";
            }
            if (path.basename(oldRoot) !== name) {
                this.destinationRoot(path.join(oldRoot, name));
            }
        }
    },

    writing: {
        /**
         * 记录文件创建时间
         */
        addTimestamp: function () {
            this.props["date"] = new Date();
        },
        /**
         * 拷贝模板文件并渲染
         */
        copyApp: function () {
            // 获取模板路径
            var tempPath = this.templatePath() + "/" + this.props.type;

            // 创建并渲染模板
            this.fs.copyTpl(
                tempPath,
                this.destinationPath(),
                this.props
            );
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
    }
});

