import React from 'react'
import { loadMicroApp } from 'qiankun'

class VuePage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
    this.microVueApp = null
  }

  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'sub-app-vue',
      entry: process.env.REACT_APP_SUB_APP_VUE1,
      container: this.containerRef.current,
      props: { brand: 'qiankun' }
    })
  }

  componentWillUnmount() {
    this.microApp.unmount()
  }

  componentDidUpdate() {
    // this.microApp.update({ name: 'kuitos' })
  }

  render() {
    return <div ref={this.containerRef} />
  }
}

export default VuePage
