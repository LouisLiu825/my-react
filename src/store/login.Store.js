import { clearToken, http, setToken } from '@/utils'
import { makeAutoObservable } from 'mobx'

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }

  login = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code,
    })
    // console.log(res)
    this.token = res.data.token
    setToken(this.token)
  }
  logout = () => {
    this.token = ''
    clearToken()
  }
}

export default LoginStore
