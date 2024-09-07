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
        access: 'canAdmin',
        routes: [
          {
            path: '/admin/examRecord',
            name: '考试记录',
            component: './Welcome',
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
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
          },
        ],
      },
      {
        name: '系统管理',
        icon: <CrownOutlined />,
        path: '/system',
        component: './ListTableList',
        routes: [
          {
            path: '/system/sub-page2',
            name: '二级列表页面',
          },
          {
            path: '/system/sub-page3',
            name: '三级列表页面',
          },
        ],
      },
      {
        name: '试题管理',
        icon:<EditOutlined />,
        path: '/system1',
        component: './ListTableList',
        routes: [
          {
            path: '/system1/sub-page2',
            name: '二级列表页面',
          },
          {
            path: '/system1/sub-page3',
            name: '三级列表页面',
          },
        ],
      },
      {
        name: '试卷管理',
        icon: <FileUnknownOutlined />,
        path: '/system2',
        component: './ListTableList',
        routes: [
          {
            path: '/system2/sub-page2',
            name: '二级列表页面',
          },
          {
            path: '/system2/sub-page3',
            name: '三级列表页面',
          },
        ],
      },
    ],
  }
 } 