import React, { useState } from 'react';

import { HomeOutlined } from '@ant-design/icons';

import Layout from 'components/BasicComponent/Layout';
import Menu from 'components/BasicComponent/Menu';

const { Sider } = Layout;
const { Item } = Menu;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsedValue) => {
    setCollapsed(collapsedValue);
  };

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
          <Item key="1" icon={<HomeOutlined />}>
            Trang Chủ
          </Item>
        </Menu>
      </Sider>
    </>
  );
};

export default MainLayout;
