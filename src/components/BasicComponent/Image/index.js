import React from 'react';
import AntdImage from 'antd/es/image';
import 'antd/es/image/style/css';

const { PreviewGroup } = AntdImage;

function Image(props) {
  return <AntdImage {...props} />;
}

Image.PreviewGroup = PreviewGroup;

export default Image;
