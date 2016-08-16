# Tomoko component generator [![Coverage Status](https://coveralls.io/repos/github/Peter-WF/generator-tomoko/badge.svg?branch=master&foo=bar)](https://coveralls.io/github/Peter-WF/generator-tomoko) [![Build Status](https://travis-ci.org/Peter-WF/generator-tomoko.svg?branch=master)](https://travis-ci.org/Peter-WF/generator-tomoko)
通用的 Tomoko component 模板脚手架
## Getting Started
### Installation
>```
>$npm install -g yo generator-tomoko -d
>```
**注**：若安装过程中报错, 请尝试更新 npm 到最新版本
>```
>npm install -g npm
>```


### Run

#### 初始化组件
>```
>$yo tomoko
>```

#### 添加 example

  进入生成的组件文件夹中, 执行新建 example

>```
>$cd yourComponentName
>
>$yo tomoko addExample
>```

### What do you get?

#### Project Structure

    .
    ├── api/
    │   └── api.yml
    ├── doc/
    │   └── index.md
    ├── example/
    │   └── index/
    │       ├── index.js
    │       ├── index.css
    │       └── index.tpl
    ├── src/
    │   ├── image/
    │   │   └── logo.png
    │   ├── javascript/
    │   │   ├── index.js
    │   │   └── util/
    │   │       └── index.js
    │   ├── less/
    │   │   └── index.less
    │   ├── template/
    │   │   └── index.tpl
    │   └── index.js
    └── component.json

* **/api**    - 组件外部资源 API 配置目录
* **/doc**          - 组件文档目录
* **/example**  - 组件演示示例
* **/src**  - 组件源文件
* **/test**  - 包含 单元测试, [UI 测试]
* **/component.json** - 组件基本信息


### Other
- https://github.com/yeoman/yo
