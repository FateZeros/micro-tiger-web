# 前端微服务框架搭建

![](https://img.shields.io/badge/npm-6.14.4%2B-brightgreen)
![](https://img.shields.io/badge/node-12.18.0%2B-brightgreen)
![](https://img.shields.io/badge/qiankun-2.0%2B-green)
![](https://img.shields.io/badge/vue-2.0%2B-brightgreen)

实战 [qiankun 2.0](https://qiankun.umijs.org/zh/guide)

![qiankun](https://github.com/FateZeros/micro-tiger-web/blob/master/example/example-01.png)

## 安装 qiankun

```bash
yarn add qiankun
```

## 微前端服务优点

1. 子应用并行
2. 父子应用通信
3. 预加载 - 空闲时预加载子应用的资源
4. 公共依赖
5. 按需加载
6. JS 沙箱
7. CSS 隔离

## 微前端服务项目结构

```bash
├── common        // 公共模块
├── main          // 基座
|—— sub-app       // 子应用
  |—— sub-app-react  // react 子应用
  |—— sub-app-vue    // vue 子应用
  └── sub-app-jq    // jq 子应用
```

### 项目启动

|     项目      |    版本    |      域名       |
| :-----------: | :--------: | :-------------: |
| 基座项目 main |  vue 2.0   | localhost:60000 |
|  微项目 vue   |  vue 2.0   | localhost:60001 |
| 微项目 react  | react 17.0 | localhost:60002 |
|   微项目 jq   |     jq     | localhost:60003 |

### 项目实现功能

qiankun 框架搭建

- [x] 接入 React 项目，路由跳转
- [x] 接入 Vue 项目，路由跳转
- [ ] 接入 JQ 项目
- [ ] React 项目与 Vue 项目通信
- [ ] 复用基座组件

### 加载微应用

通过基座加载微应用有 2 种方案
一种是通过 `registerMicroApps` 注册子应用信息包括子应用的名称(name)、入口(entry)、挂载容器 id(container)、路由匹配规则(activeRule)，注册后的应用会根据浏览器 url 的变化来匹配对应的子应用并加载。
另外一种是通过 `loadMicroApp` 来手动加载子应用，也是需要传入子应用的名称、入口、挂载容器 id，不过是少了路由匹配规则。能让你的子应用立即挂载，无须匹配任何路由规则。

qiankun JS 沙箱隔离:
qiankun 会在子应用激活的时候为其赋予一个代理后的 window 对象, 用户操作这个 window 对象的每一步都会被记录下来, 方便在卸载子应用时还原全局 window 对象, 你要问如何替换的 window 对象, 其实它是用 with 与 evel 来实现的替换, 并且比如 jq 在执行前为了提高效率都会把 window 对象传入函数里使用, 那么这里直接传入代理 window 就都 ok。

## 项目展示

![React 子应用](https://github.com/FateZeros/micro-tiger-web/blob/master/example/1.png) </br>
![Vue 子应用](https://github.com/FateZeros/micro-tiger-web/blob/master/example/2.png) </br>
![JQ 子应用](https://github.com/FateZeros/micro-tiger-web/blob/master/example/3.png) </br>

## 参考

[qiankun 2.x 运行时沙箱 源码分析](https://juejin.cn/post/6885214342552223757)
