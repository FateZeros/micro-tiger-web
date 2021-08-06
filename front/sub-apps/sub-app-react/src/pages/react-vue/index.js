import React, { Fragment } from 'react'
import { loadMicroApp } from 'qiankun'
import { Row, Col, Button, Card } from 'antd'
import styles from './index.module.css'

class React2Vue extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
    this.microVueApp = null

    this.state = {
      msgNum: 1
    }
  }

  componentDidMount() {
    // 指定跳转到 sub-app-vue 的路由
    this.microApp = loadMicroApp({
      name: 'sub-app-vue',
      entry: process.env.REACT_APP_SUB_APP_VUE1,
      container: this.containerRef.current,
      props: {}
    })
  }

  componentWillUnmount() {
    this.microApp.unmount()
  }

  componentDidUpdate() {}

  handleClickBtn1 = () => {
    this.setState(
      {
        msgNum: this.state.msgNum + 1
      },
      () => {}
    )
    this.microApp.update({
      msgNum: this.state.msgNum
    })
  }

  // 子应用调用 基座应用方法
  handleClickBtn2 = () => {
    console.log(this.props, 1212)
  }

  render() {
    return (
      <Fragment>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="React 页面" bordered={false}>
              <Button type="primary" onClick={this.handleClickBtn1}>
                React Btn1
              </Button>
              <Button
                type="primary"
                className={styles.ml20}
                onClick={this.handleClickBtn2}
              >
                Vue 子应用
              </Button>
            </Card>
          </Col>
          <Col span={6}>
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
