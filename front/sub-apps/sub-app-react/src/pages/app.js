import { BrowserRouter as Router } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <BasicLayout />
      </Router>
    </div>
  )
}

export default App
