import * as React from 'react';
import AntdLayout from 'antd/es/layout';
import 'antd/es/layout/style/css';

const { Header, Content, Footer, Sider } = AntdLayout;

function Layout(props) {
  return <AntdLayout {...props}>{props.children}</AntdLayout>;
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
