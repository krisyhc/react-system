import {
  CrownOutlined,
  FileUnknownOutlined,
  FormOutlined ,
  TeamOutlined ,
  EditOutlined 
} from '@ant-design/icons';

 export default {
  route :{
    path: '/',
    routes: [
      {
        path: '/admin',
        name: '考试管理',
        icon: <FormOutlined />,
        routes: [
          {
            path: '/admin/examRecord',
            name: '考试记录',
          },
          {
            path: '/admin/createExam',
            name: '创建考试',
          },
        ],
      },
      {
        name: '班级管理',
        icon: <TeamOutlined />,
        path: '/class',
        routes: [
          {
            path: '/class/classList',
            name: '班级列表',
          },
          {
            path: '/class/studentList',
            name: '学生列表',
          },
        ],
      },
      {
        name: '系统管理',
        icon: <CrownOutlined />,
        path: '/system',
        routes: [
          {
            path: '/system/limitsManger',
            name: '权限管理',
          },
          {
            path: '/system/personal',
            name: '个人信息',
          },
          {
            path: '/system/roleManger',
            name: '角色管理',
          },
          {
            path: '/system/user',
            name: '用户',
          },
          {
            path: '/system/userManger',
            name: '用户管理',
          }
        ],
      },
      {
        name: '试题管理',
        icon:<EditOutlined />,
        path: '/topic',
        routes: [
          {
            path: '/topic/additem',
            name: '添加试题',
          },
          {
            path: '/topic/itemBank',
            name: '试题库',
          },
        ],
      },
      {
        name: '试卷管理',
        icon: <FileUnknownOutlined />,
        path: '/paper',
        routes: [
          {
            path: '/paper/addpaper',
            name: '创建试卷',
          },
          {
            path: '/paper/paperBank',
            name: '试卷库',
          },
        ],
      },
    ],
  }
 } 