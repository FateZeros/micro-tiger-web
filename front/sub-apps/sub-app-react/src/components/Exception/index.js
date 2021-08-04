import React, { createElement } from 'react'
import config from './typeConfig'
import { Button } from 'antd'
import styles from './index.module.css'

const Exception = ({ title, type, linkElement = 'a', ...rest }) => {
  const pageType = type in config ? type : '404'

  return (
    <div {...rest}>
      <div className={styles.content}>
        <h1>{title || config[pageType].title}</h1>
        {createElement(
          linkElement,
          {
            to: '/',
            href: '/'
          },
          <Button type="primary">返回首页</Button>
        )}
      </div>
    </div>
  )
}

export default Exception
