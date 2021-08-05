import React from 'react'
import { loadMicroApp } from 'qiankun'
import { Row, Col, Button } from 'antd'

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
    // 指定跳转到 sub-app 的路由
    this.microApp = loadMicroApp({
      name: 'sub-app-vue',
      entry: process.env.REACT_APP_SUB_APP_VUE1,
      container: this.containerRef.current,
      props: { brand: 'qiankun', routeName: 'msg' }
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

  render() {
    return (
      <Row>
        <Col span={12}>
          <Button type="primary" onClick={this.handleClickBtn1}>
            React Btn1
          </Button>
        </Col>
        <Col span={12}>
          <div ref={this.containerRef} />
        </Col>
      </Row>
    )
  }
}

export default React2Vue
