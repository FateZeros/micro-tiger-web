# 前端微服务框架搭建

Vue 版本 @vue/cli 4.5.13

实战 [qiankun 2.0](https://qiankun.umijs.org/zh/guide)

```bash
yarn add qiankun
```

## 微服务项目结构

```bash
├── common        // 公共模块
├── main          // 基座
|—— sub-app       // 子应用
  |—— sub-react1   // react 子应用
  └── sub-vue1     // vue 子应用
```

### 项目启动

|     项目      |      域名      |
| :-----------: | :------------: |
| 基座项目 main | localhost:6000 |
|  微项目 vue   | localhost:6001 |
| 微项目 react  | localhost:6002 |
