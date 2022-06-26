import { Card, Button, Checkbox, Form, Input, message } from 'antd'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.png'
import './index.scss'

function Login() {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const { mobile, code } = values
    try {
      await loginStore.login({ mobile, code })
      navigate('/')
      message.success('登录成功')
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          //   默认值
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="mobile"
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur',
              },
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="code"
            name="code"
            rules={[
              { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="请输入验证码"
              maxLength={6}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
