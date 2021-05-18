import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { PlusCircleOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';
import useWindowDimensions from 'hooks/useWindowDimensions';

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
  const [collapsed, setCollapsed] = useState(false);
  const { width } = useWindowDimensions();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(width < 991);
  }, [width]);

  return (
    <Layout className="layout_main">
      <Sider collapsed={collapsed} onToggle={toggle} />
      <Layout className="site-layout">
        <TopBar onToggle={toggle} collapsed={collapsed} className="header" />
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
