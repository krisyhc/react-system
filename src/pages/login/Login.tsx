import React, { useEffect, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import style from './Login.module.scss'
import { loginCaptchaApi, loginApi } from '../../Api/login'
import type { LoginParams } from '../../types/login'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [imgUrl, setImgUrl] = useState('')
  const navigate = useNavigate()

  const onFinish = async (values: LoginParams) => {
    try {
      const res = await loginApi(values)
      if (res.data.code === 200) {
        message.success('登录成功')
        localStorage.setItem('token', res.data.data.token)
        console.log(res.data.data.token)

        navigate('/')
      } else if (res.data.code === 1005) {
        message.error(res.data.msg)
        getCaptcha()
      } else {
        message.error(res.data.msg)
      }
    } catch(e) {
      message.error('请求失败')
    }
  };

  const getCaptcha = async () => {
    try {
      const res = await loginCaptchaApi()
      if (res.data.code === 200) {
        setImgUrl(res.data.data.code)
      } else {
        message.error(res.data.msg)
      }
    } catch(e) {
      message.error('请求失败，请稍后重试！')
    }
  }

  useEffect(() => {
    getCaptcha()
  }, [])

  return (
    <div className={style.login}>
      <h2>登录考试系统</h2>
      <Form
        name="login"
        className={style.form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>
        <div className={style.codeRow}>
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input prefix={<LockOutlined />} placeholder="验证码" />
          </Form.Item>
          <div className={style.codeImg} onClick={getCaptcha}>
            <img src={imgUrl} alt="" />
          </div>
        </div>
        <Form.Item>
          <Button block type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
