import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';

import Layout from 'components/BasicComponent/Layout';
import Footer from 'components/Footer';
import Sider from 'containers/SidebarLeft';
import Button from 'components/BasicComponent/Button';
import { authActions } from 'pages/LoginPage/slices';

const { Header, Content } = Layout;

const MainLayout = (props) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <Layout className="layout_main">
      <Header className="header">
        <Button onClick={onClick}>Logout</Button>
      </Header>
      <Layout className="site-layout">
        <Sider />
        <div className="content_wrapper">
          <Content className="content">{props.children}</Content>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
