module.exports = {
  devServer: {
    port: 6000,
    headers: {
      // 主应用获取子应用时跨域响应头
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }
  }
}
