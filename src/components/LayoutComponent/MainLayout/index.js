import React from 'react';
import { useIntl } from 'react-intl';
import { PlusCircleOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

import Layout from 'components/BasicComponent/Layout';
import Button from 'components/BasicComponent/Button';
import Footer from 'components/Footer';
import TopBar from 'containers/TopBar';
import Sider from 'containers/Sidebar/SidebarLeft';

import './styles.scss';

const { Content } = Layout;

const MainLayout = (props) => {
  const intl = useIntl();
  const getText = createTranslatedText('common.action', intl);
  return (
    <Layout className="layout_main">
      <Sider />
      <Layout className="site-layout">
        <TopBar className="header" />
        <Content className="content">
          <Button type="primary" className="register-service-btn">
            <PlusCircleOutlined />
            {getText('registerService')}
          </Button>
          {props.children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
