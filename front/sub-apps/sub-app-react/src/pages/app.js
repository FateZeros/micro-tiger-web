import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'
import styles from './app.module.css'

function App(props) {
  /** 需要设置路由命名空间 */
  const baseRouterName = window.__POWERED_BY_QIANKUN__ ? '/sub-app-react1' : ''

  return (
    <div className={styles.App}>
      <Router basename={baseRouterName}>
        <BasicLayout />
      </Router>
    </div>
  )
}

export default App
