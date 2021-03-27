import React from 'react';

import Layout from 'components/BasicComponent/Layout';
import Sider from 'containers/SidebarLeft';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => (
  <>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>{props.children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  </>
);

export default MainLayout;
