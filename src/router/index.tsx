import React from'react'
import Home from '../pages/home/Home'
import Login from "../pages/login/Login"
import { Button, Result } from 'antd'
import { NavLink } from 'react-router-dom'

// 懒加载
// 考试管理examManage
const ExamRecord = React.lazy(() => import('../pages/home/examManage/examRecord/ExamRecord'))
const CreateExam = React.lazy(() => import('../pages/home/examManage/createExam/CreateExam'))
const routes = [
  {
    path: '/',
    element:<Home/>,
    children:[
      {
        path: '/examRecord',
        element:<ExamRecord/>,
      },
      {
        path: '/createExam',
        element:<CreateExam/>,
      },
    ]
  },
  {
    path: '/login',
    element:<Login/>,
  },
  {
    path: '*',
    element: <Result
    status="404"
    title="404"
    subTitle="对不起，您访问的页面不存在。"
    extra={
      <NavLink to="/">
        <Button type="primary">返回首页</Button>
     </NavLink>
  }
  />
  },
 




]

export default routes