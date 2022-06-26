// 1.判断token是否存在
// 2.存在，正常渲染
// 3.不存在  重定向到登录

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthComponent({ children }) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}

export { AuthComponent }
