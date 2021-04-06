import React from 'react';

import Layout from 'components/BasicComponent/Layout';
import Footer from 'components/Footer';
import TopBar from 'containers/TopBar';
import Sider from 'containers/Sidebar/SidebarLeft';

import './styles.scss';

const { Content } = Layout;

const MainLayout = (props) => (
  <Layout className="layout_main">
    <TopBar className="header" />
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
