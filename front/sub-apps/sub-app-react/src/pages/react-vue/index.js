import React, { Fragment } from 'react'
import { loadMicroApp } from 'qiankun'
import { Row, Col, Button, Card } from 'antd'
import styles from './index.module.css'

import SharedModule from '@/shared'

class React2Vue extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
    this.microVueApp = null

    const shared = SharedModule.getShared()

    this.state = {
      clickNum: 1,
      globalStore: shared.store
    }
  }

  componentDidMount() {
    // 指定跳转到 sub-app-vue 的路由
    this.microApp = loadMicroApp({
      name: 'sub-app-vue',
      entry: process.env.REACT_APP_SUB_APP_VUE1,
      container: this.containerRef.current,
      props: {
        shared: SharedModule.getShared()
      }
    })
  }

  componentWillUnmount() {
    this.microApp.unmount()
  }

  componentDidUpdate() {}

  handleClickBtn1 = () => {
    this.setState({
      clickNum: this.state.clickNum + 1
    })
    const { globalStore } = this.state

    globalStore.setGlobalState({
      user: {
        name: 'React'
      }
    })
  }

  // 子应用调用 基座应用方法
  handleClickBtn2 = () => {
    const { globalStore } = this.state

    globalStore.setGlobalState({
      user: {
        name: 'React2Vue'
      }
    })
  }

  render() {
    const { globalStore, clickNum } = this.state
    const globalState = globalStore.getGlobalState()

    return (
      <Fragment>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="React 页面" bordered={false}>
              <Row className={styles.mb24}>[React 应用]点击数: {clickNum}</Row>
              <Row className={styles.mb24}>
                [基座应用] name:
                <span className={styles.red}>{globalState.user.name}</span>
              </Row>
              <Row className={styles.mb24}>
                <Button type="primary" onClick={this.handleClickBtn1}>
                  change 基座 name
                </Button>
              </Row>
              <Row>
                <Button type="primary" onClick={this.handleClickBtn2}>
                  change Vue 子应用
                </Button>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Vue 子应用" bordered={false}>
              <div ref={this.containerRef} />
            </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default React2Vue
