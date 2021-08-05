const path = require('path')
const { name } = require('./package.json')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  webpack: function override(config, env) {
    // 解决主应用接入后会挂掉的问题：https://github.com/umijs/qiankun/issues/340
    // config.entry = config.entry.filter(e => !e.includes('webpackHotDevClient'))

    config.output.library = `${name}`
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`
    config.output.globalObject = 'window'

    // Remove 'react-refresh' from the loaders.
    for (const rule of config.module.rules) {
      if (!rule.oneOf) continue

      for (const one of rule.oneOf) {
        if (
          one.loader &&
          one.loader.includes('babel-loader') &&
          one.options &&
          one.options.plugins
        ) {
          one.options.plugins = one.options.plugins.filter(
            plugin =>
              typeof plugin !== 'string' || !plugin.includes('react-refresh')
          )
        }
      }
    }

    config.plugins = config.plugins.filter(
      plugin =>
        !(plugin instanceof webpack.HotModuleReplacementPlugin) &&
        !(plugin instanceof ReactRefreshPlugin)
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src')
    }
    return config
  },

  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true
      config.open = false
      config.hot = false
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      // 配置 history 模式
      // config.historyApiFallback = true

      return config
    }
  }
}
