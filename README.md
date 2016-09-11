## vue component seed

描述一下这个组件项目吧

## 如何使用

- NPM

```sh
npm install vue-component-seed
```

- CommonJS

```js
var hello = require('vue-component-seed/src/hello');

new Vue({
  components: {
    'hello': hello
  }
})
```
- ES6

```js
import hello from 'vue-component-seed/src/hello'

new Vue({
  components: {
    hello
  }
})
```

## 如何搭建开发环境

只需以下命令即可：
```sh
npm run dev
```

## 如何增加一个组件

```sh
yo vc:add-comp [component name]
```
在启动开发服务下，可以打开开发链接（http://localhost:3000/examples/[component name]/index.html）进行预览

## 如何发布组件项目

第一步：
```sh
npm run release
```

第二步：

修改`package.json`的版本号，把本地代码`push`到服务器，然后打个tag即可

## TODO

1. 发布的时候自动修改package.json的版本号，然后打tag，push到服务器

2. 图片，font字体等静态资源问题

3. 把webpack生成的一些公共代码抽离出来，减少组件大小
