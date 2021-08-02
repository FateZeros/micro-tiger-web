const path = require('path')

module.exports = {
  devServer: {
    port: 60000,
    headers: {
      // 主应用获取子应用时跨域响应头
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
