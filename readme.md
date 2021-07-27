# 前端微服务框架搭建

![](https://img.shields.io/badge/qiankun-2.0%2B-green)
![](https://img.shields.io/badge/vue-2.0%2B-brightgreen)

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

|     项目      |    版本    |      域名      |
| :-----------: | :--------: | :------------: |
| 基座项目 main |  vue 2.0   | localhost:6000 |
|  微项目 vue   |   vue2.0   | localhost:6001 |
| 微项目 react  | react 17.0 | localhost:6002 |
