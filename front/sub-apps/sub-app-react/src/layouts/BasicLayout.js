import React from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

// pages
import NotFound from '@/components/ExceptionPages/404'
import Home from '@/pages/home'
import VuePage from '@/pages/vue'
import JQPage from '@/pages/jq'
import React2Vue from '@/pages/react-vue'

import styles from './BasicLayout.module.css'

const { Header, Content, Footer, Sider } = Layout

// const query = {
//   'screen-xs': {
//     maxWidth: 575
//   },
//   'screen-sm': {
//     minWidth: 576,
//     maxWidth: 767
//   },
//   'screen-md': {
//     minWidth: 768,
//     maxWidth: 991
//   },
//   'screen-lg': {
//     minWidth: 992,
//     maxWidth: 1199
//   },
//   'screen-xl': {
//     minWidth: 1200,
//     maxWidth: 1599
//   },
//   'screen-xxl': {
//     minWidth: 1600
//   }
// }

class BasicLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  getPageTitle = () => {
    // const { routerData, location } = this.props
    // const { pathname } = location
    let title = 'Micro tiger'
    // let currRouterData = null
    // // match params path
    // Object.keys(routerData).forEach(key => {
    //   if (pathToRegexp(key).test(pathname)) {
    //     currRouterData = routerData[key]
    //   }
    // })
    // if (currRouterData && currRouterData.name) {
    //   title = `${currRouterData.name} - Micro tiger`
    // }
    document.title = title
  }

  componentDidMount() {
    this.getPageTitle()
  }

  render() {
    const { collapsed } = this.state
    /**
     * 在主应用跳转路由后，需要指定到子应用的路由
     * Vue 页面: [主应用路由]/vue + [子应用路由]/#/
     * React 与 Vue 页面: [主应用路由路由] /react-vue + [子应用路由] /#/msg
     */
    const childPath1 = '/#/'
    const childPath2 = '/#/msg'

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/home">React 页面</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to={`/vue${childPath1}`}>Vue 页面</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/jq/">JQ 页面</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <Link to={`/react-vue${childPath2}`}>React 与 Vue 通信</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content className={styles.Content}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/vue" component={VuePage} />
              <Route path="/jq" component={JQPage} />
              <Route path="/react-vue" component={React2Vue} />
              <Redirect exact from="/" to="/home" />
              <Route render={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React Web ©2021 Created by FateZeros
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
