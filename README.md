
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

```













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


