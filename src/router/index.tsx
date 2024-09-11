import React from'react'
import Home from '../pages/home/Home'
import Login from "../pages/login/Login"
import { Button, Result } from 'antd'
import { NavLink } from 'react-router-dom'

// 懒加载
// 考试管理examManage
const ExamRecord = React.lazy(() => import('../pages/home/examManage/examRecord/ExamRecord'))
const CreateExam = React.lazy(() => import('../pages/home/examManage/createExam/CreateExam'))
// 班级管理
const ClassList = React.lazy(() => import('../pages/home/classManage/classList/ClassList'))
const StudenList= React.lazy(() => import ('../pages/home/classManage/studentList/StudentList'))

// 系统管理
const LimitsManger = React.lazy(() => import('../pages/home/systemMange/limitsManger/LimitsManger'))
const Personal = React.lazy(() => import('../pages/home/systemMange/personal/Personal'))
const RoleManger = React.lazy(() => import('../pages/home/systemMange/roleManger/RoleManger'))
const User = React.lazy(() => import('../pages/home/systemMange/user/User'))
const UserManger = React.lazy(() => import('../pages/home/systemMange/userManger/UserManger'))
// 试题管理
const Additem = React.lazy(() => import('../pages/home/textManage/addItem/Additem'))
const ItemBank = React.lazy(() => import('../pages/home/textManage/itemBank/ItemBank'))
// 试卷管理
const Addpaper = React.lazy(() => import('../pages/home/paperManage/addPaper/AddPaper'))
const PaperBank = React.lazy(() => import('../pages/home/paperManage/paperBank/PaperBank'))


const routes = [
  {
    path: '/',
    element:<Home/>,
    children:[
      {
        path: '/admin/examRecord',
        element:<ExamRecord/>,
      },
      {
        path: '/admin/createExam',
        element:<CreateExam/>,
      },
      {
        path: '/class/classList',
        element:<ClassList/>,
      },
      {
        path: '/class/studentList',
        element:<StudenList/>,
      },
      {
        path: '/system/limitsManger',
        element:<LimitsManger/>,
      },
      {
        path: '/system/personal',
        element:<Personal/>,
      },
      {
        path: '/system/roleManger',
        element:<RoleManger/>,
      },
      {
        path: '/system/user',
        element:<User/>,
      },
      {
        path: '/system/userManger',
        element:<UserManger/>,
      },
      {
        path: '/topic/additem',
        element:<Additem/>,
      },
      {
        path: '/topic/itemBank',
        element:<ItemBank/>,
      },
      {
        path: '/paper/addpaper',
        element:<Addpaper/>,
      },
      {
        path: '/paper/paperBank',
        element:<PaperBank/>,
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