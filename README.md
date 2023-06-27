
# 从零搭建Vue组件库

## 1.组件库的划分

以elementUi为基准分为

- Basic:Button、Icon图标、Layout布局、container布局容器...
- Form:Input、Radio、checkbox、DatePicker、Upload...
- Data:Table、Tree、Pagination...
- Notice:Alert、Loading、Message...
- Navigation: Tabs、Dropdown、NavMenu...
- Others:Popover,Dialog、inifiniteScroll、Carousel...

## 2.通过Vue-Cli初始化项目

```
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 3.x
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save   
? Pick a unit testing solution: Mocha
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

Mocha + Chai # ui测试需要使用karma
```

## 3.目录结构配置

```
│  .browserslistrc # 兼容版本
│  .gitignore
│  babel.config.js # babel的配置文件
│  package-lock.json
│  package.json
│  README.md   
|  examples   # 组件使用案例
├─public
│      favicon.ico
│      index.html 
├─src
│  │  App.vue 
│  │  main.js
│  │  
│  ├─packages # 需要打包的组件
│  │      button
|  |      button-group
│  │      icon
│  │      index.js # 所有组件的入口
│  │       
│  └─styles # 公共样式
│         common
|         mixins
└─tests # 单元测试
    └─unit
          button.spec.js
```

## 4.编写插件入口

```js
import Icon from './icon';
import Button from './button'
import ButtonGroup from './button-group'

const plugins = [
  Icon,
  Button,
  ButtonGroup
]

const install = (app)=>{
  plugins.forEach((plugin)=>{
    app.use(plugin)
  })
}
export default { 
  install
}
```

## 5.引入使用
我们可以通过插件的方式去引入我们的组件库
```js
import { createApp } from 'vue'
import App from './App.vue'


import Vui from './packages/index'

createApp(App).use(Vui).mount('#app')

```
## 6.编写组件

### 6.1 编写Button组件

#### 实现功能规划

- [ ] 按钮的基本用法
- [ ] 图标按钮
- [ ] 按钮加载中状态
- [ ] 按钮组的实现

### 6.1 编写Icon组件

Iconfont 的 svg 

## 7.使用VitePress搭建文档

### 基本配置

1. 安装
```bash
npm install vitepress -D
```

2. 配置scripts

```json
{
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs"
}
```
3. 初始化docs

增加入口页面index.md

```md
# v-ui
```
4. 配置导航

config.js
```js
module.exports = {
    title: 'v-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    themeConfig: { //主题配置
        nav: [
            { text: '主页', link: '/' },
            { text: "Button 按钮", link: "/button/" },
            { text: 'icon', link: "/icon/" },
        ],
        //   // 为以下路由添加侧边栏
        sidebar: {
            '/button/': [
                {
                    text: 'Button 按钮', // 必要的
                    items: [
                        {
                            text: "Button的使用",
                            link: "/button/index",
                        }
                    ]
                }
            ],
            '/icon/': [
                {
                    text: 'icon', // 必要的
                    link: "/icon/index",
                    collapsable: false, // 可选的, 默认值是 true,
                    items: []
                }
            ]
        }
    }
}
```



## 8. 打包组件

### 1.配置打包命令

```json
"build": "vue-cli-service build --target lib --name vui ./src/packages/index.js --no-clean && vue-cli-service build --all --no-clean",
```

### 2. vue.config.js

```js
const args = process.argv.slice(2);
const path = require('path');
const fs = require('fs');
const webpack = require("webpack");
const getEntries = (dir)=>{
  let absPath = path.resolve(dir); //绝对路径
  let files = fs.readdirSync(absPath) //只能读取到儿子这一层
  let entries = {};
  // console.log(files,'files---')
  files.forEach(item=>{
    let p = path.join(absPath,item);
    if(fs.statSync(p).isDirectory()){
       //如果是文件夹
       p = path.join(p,'index.js')
       entries[item] = p;
    }  
  })
  return entries
}
console.log(getEntries('./src/packages'))

if(process.env.NODE_ENV ==='production'&&args.includes('--all')){
    module.exports = {
      outputDir:'dist', //输出的是dist目录
      configureWebpack:{
        entry:{
          ...getEntries('./src/packages')
        },
        output:{
          filename:"lib/[name]/index.js",
          libraryTarget:'umd',
          libraryExport:'default',
          library:['vui','[name]']  //window.v
        },
        plugins: [
          new webpack.LoaderOptionsPlugin({
            options: {
             external:{
               //排除vue
                vue:{
                  root:'vue',
                  commonjs:'vue',
                  commonjs2:'vue',
                  amd: 'vue'
                }
              },
            }
          })
        ],
      },
      css:{
        sourceMap:true,
        extract:{
          filename:'css/[name]/style.css'
        }
      },
      //用户配合babel-plugin-import 就可以实现按需导入
      chainWebpack: config => {
        //删除默认的配置
        config.optimization.delete('splitChunks'),
        config.plugins.delete('copy')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('html')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
      }
    }
}

```

### 3. 配置运行入口

```
"main": "./dist/zf.umd.min.js"
```

### 4. link到全局下

```bash
npm link
```

## 9.搭建测试环境

我们需要测试ui渲染后的结果。需要在浏览器中测试,所有需要使用Karma

### Karma配置
 (1)安装karma

```bash
npm install --save-dev  karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai
```
(2)配置karma文件

```js
//karma.conf.js

const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: ['tests/**/*.spec.js'],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['ChromeHeadless']
  })
}
```

```json
//package.json
{
  "scripts": {
    "test": "karma start"
  }
}
```

### 单元测试






fiddler抓包PC微信小程序失败解决方案:
https://blog.csdn.net/hbqjzx/article/details/124965981?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-124965981-blog-124037807.pc_relevant_multi_platform_whitelistv4eslandingrelevant2&spm=1001.2101.3001.4242.2&utm_relevant_index=3

Fiddler使用教程:(4.1 过滤域名)https://blog.csdn.net/weixin_44330336/article/details/125522082
fildder:  https://blog.csdn.net/m0_66501929/article/details/123764930

https://blog.csdn.net/jlhx123456/article/details/124528806







## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


