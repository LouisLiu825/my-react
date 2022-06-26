import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import './index.scss'
import 'antd/dist/antd.min.css'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
