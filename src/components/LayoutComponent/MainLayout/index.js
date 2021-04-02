import React from 'react';

import './styles.scss';

import Layout from 'components/BasicComponent/Layout';
import Footer from 'components/Footer';
import Sider from 'containers/SidebarLeft';

const { Header, Content } = Layout;

const MainLayout = (props) => (
  <Layout className="layout_main">
    <Header className="header" />
    <Layout className="site-layout">
      <Sider />
      <div className="content_wrapper">
        <Content className="content">{props.children}</Content>
      </div>
    </Layout>
    <Footer />
  </Layout>
);

export default MainLayout;
