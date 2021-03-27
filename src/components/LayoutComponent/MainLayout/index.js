import React from 'react';

import styles from './styles.module.scss';

import Layout from 'components/BasicComponent/Layout';
import Footer from 'components/Footer';
import Sider from 'containers/SidebarLeft';

const { Header, Content } = Layout;

const MainLayout = (props) => (
  <>
    <Layout className={styles.main__layout}>
      <Sider />
      <Layout className="site-layout">
        <Header className={styles.main__header} />
        <div className={styles.main__content_wrapper}>
          <Content className={styles.main__content}>{props.children}</Content>
          <Footer />
        </div>
      </Layout>
    </Layout>
  </>
);

export default MainLayout;
