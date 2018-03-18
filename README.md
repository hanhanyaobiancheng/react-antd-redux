# react-antd-redux
> **基于react框架采用Facebook官方构建工具create-react-app**

项目中运用了如下知识

1. [ES6](http://es6.ruanyifeng.com/)
1. [ANT DESIGN](https://ant.design/index-cn)
1. [react router](https://reacttraining.com/react-router/web/guides/philosophy)
1. [react redux](http://www.redux.org.cn/docs/basics/UsageWithReact.html)
1. [moment](http://momentjs.cn/docs/)

> **需要安装软件**

1. [node](http://nodejs.cn/)
1. [git](https://git-scm.com/)
1. [yarn](https://yarnpkg.com/zh-Hans/)

> **构建流程**

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:9000
yarn start

# build for production with minification
yarn build
```

> **Description**

```bash
1. I forget to add the profile .idea and yarn.lock to the gitignore, and finally push then to the github,you don't need
   to pay attention to this.
2. Using npm instead of yarn to run this project is OK,the version of node should >7
```

> **TODO**

```
1. 菜单的匹配问题，当有三级菜单的时候，如果选中的是三级菜单，刷新页面以后父级菜单无法展开，三级菜单及以上都有这个问题，目前只
   支持一二级菜单的状态保持
2. 最近一直做的管理系统，所以目前只能从首页进入其他页面
```
