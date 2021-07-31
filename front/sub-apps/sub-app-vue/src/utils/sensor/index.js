let sa = null
if (window.__POWERED_BY_QIANKUN__) {
  sa = window.MAIN_SENSOR
} else {
  sa = require('sa-sdk-javascript')
}
/*
 * commonjs: const sensors = require('sa-sdk-javascript')
 * es6 module: import sensors from './sensorsdata.es6.min.js'
 * <script src="" />: const sensors = window.sensorsDataAnalytic201505
 */

// 神策数据接收地址
const serverUrl = process.env.VUE_APP_SENSOR_URL

sa.init({
  server_url: serverUrl,
  is_track_single_page: true,
  use_client_time: true,
  send_type: 'beacon',
  heatmap: {
    // 是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
    clickmap: 'default',
    // 是否开启触达注意力图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
    scroll_notice_map: 'not_collect'
  },
  show_log: false
})
// 设置公共属性
sa.registerPage({
  app_name: 'test',
  Platform_type: '2222',
  use_name: '1111'
})

// sa.quick('autoTrack')

export default sa
