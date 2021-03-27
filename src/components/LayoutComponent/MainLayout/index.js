import React from 'react';

import styles from './styles.module.scss';

import Layout from 'components/BasicComponent/Layout';
import Sider from 'containers/SidebarLeft';

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => (
  <>
    <Layout className={styles.main__layout}>
      <Sider />
      <Layout className="site-layout">
        <Header className={styles.main__header} />
        <Content className={styles.main__content}>{props.children}</Content>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </>
);

export default MainLayout;
