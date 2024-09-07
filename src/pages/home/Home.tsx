import {
  InfoCircleOutlined,
  MergeCellsOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import { Outlet, useNavigate, useLocation , NavLink} from 'react-router-dom'
import { Suspense } from 'react';
import './Home.module.scss';
import defaultProps from '../../compoents/defaultProps';

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        title="正曦教育"
        logo="../../../../../public/logo.png"
        fixSiderbar
        {...defaultProps}
        location={{
          pathname:location.pathname,
        }}
        waterMarkProps={{
          content: '正曦教育',
          fontColor: 'rgba(0,0,0,0.2)',
        }}
        avatarProps={{
          icon: <UserOutlined />,
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={() => [
          <InfoCircleOutlined key="InfoCircleOutlined" />,
          <QuestionCircleOutlined key="QuestionCircleOutlined" />,
          <MergeCellsOutlined key="MergeCellsOutlined" />,
        ]}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: 'center',
                color: 'rgba(0,0,0,0.6)',
                paddingBlockStart: 12,
              }}
            >
              版权所有 © 2024 正曦教育
            </p>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '120vh',
              minHeight: 600,
            }}
          >
            {<Suspense fallback={<div>Loading...</div>} >
              <Outlet />
            </Suspense>
              &&
             <Result
              status="404"
              style={{
                height: '100%',
              }}
              title="Hello World"
              subTitle="对不起，您访问的页面不存在！"
              extra={
                <NavLink to="/">
                  <Button type="primary">返回首页</Button>
               </NavLink>
            }
            /> }
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};