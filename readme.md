# 前端微服务框架搭建

![](https://img.shields.io/badge/qiankun-2.0%2B-green)
![](https://img.shields.io/badge/vue-2.0%2B-brightgreen)

实战 [qiankun 2.0](https://qiankun.umijs.org/zh/guide)

<img src="https://github.com/FateZeros/micro-tiger-web/blob/master/example/example-01.png" />

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
  └── sub-app-vue     // vue 子应用
```

### 项目启动

|     项目      |    版本    |      域名       |
| :-----------: | :--------: | :-------------: |
| 基座项目 main |  vue 2.0   | localhost:60000 |
|  微项目 vue   |  vue 2.0   | localhost:60001 |
| 微项目 react  | react 17.0 | localhost:60002 |

### 加载微应用

通过基座加载微应用有 2 种方案
一种是通过 `registerMicroApps` 注册子应用信息包括子应用的名称(name)、入口(entry)、挂载容器 id(container)、路由匹配规则(activeRule)，注册后的应用会根据浏览器 url 的变化来匹配对应的子应用并加载。
另外一种是通过 `loadMicroApp` 来手动加载子应用，也是需要传入子应用的名称、入口、挂载容器 id，不过是少了路由匹配规则。能让你的子应用立即挂载，无须匹配任何路由规则。

## 参考

[qiankun 2.x 运行时沙箱 源码分析](https://juejin.cn/post/6885214342552223757)
