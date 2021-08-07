import { PageHeader, Tag, Button, Row, Typography } from 'antd'
import AvatarImg from '@/assets/avatar1.jpeg'
import Home2Svg from '@/assets/home2.svg'

const { Paragraph } = Typography

const Home = () => {
  const Content = ({ children, extraContent }) => (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  )

  const content = (
    <>
      <Paragraph>
        我是一个 React 应用 + {}
        <a
          href="https://ant.design/index-cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd Design UI
        </a>
      </Paragraph>
      <Paragraph>
        我是一个 React 应用我是一个 React 应用我是一个 React 应用我是一个 React
        应用我是一个 React 应用我是一个 React 应用我是一个 React 应用
      </Paragraph>
    </>
  )

  const handleOpenVueApp = () => {
    window.open(process.env.REACT_APP_SUB_APP_VUE1)
  }

  const handleOpenJQ = () => {
    window.open(process.env.REACT_APP_SUB_APP_JQ1)
  }

  return (
    <PageHeader
      title="这是一个React应用"
      className="site-page-header"
      subTitle="react 子应用"
      tags={<Tag color="blue">Running</Tag>}
      extra={[
        <Button key="3" onClick={handleOpenVueApp}>
          打开 Vue 应用
        </Button>,
        <Button key="2" onClick={handleOpenJQ}>
          打开 JQ 应用
        </Button>,
        <Button key="1" type="primary">
          Primary
        </Button>
      ]}
      avatar={{
        src: AvatarImg
      }}
    >
      <Content extraContent={<img src={Home2Svg} alt="content" width="100%" />}>
        {content}
      </Content>
    </PageHeader>
  )
}

export default Home
