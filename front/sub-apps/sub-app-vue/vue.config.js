const path = require('path')
const { name } = require('./package.json')

module.exports = {
  // publicPath: '/vue1',
  devServer: {
    port: 60001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  // configureWebpack: {
  //   output: {
  //     library: `${name}-[name]`,
  //     libraryTarget: 'umd', // 把子应用打包成 umd 库格式
  //     jsonpFunction: `webpackJsonp_${name}`,
  //   }
  // }
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.join(__dirname, './src')
    }
    config.output = {
      ...config.output,
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
      globalObject: 'window'
    }
  }
}
