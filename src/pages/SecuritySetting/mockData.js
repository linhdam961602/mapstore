import React from 'react';

import Button from 'components/BasicComponent/Button';

export const dataSource = [
  {
    key: '1',
    supplier: 'Google',
    name: 'Hoang Phuc',
    email: 'hoangphucvn@gmail.com',
    manipulation: 'Gỡ bỏ liên kết',
  },
];

export const columns = [
  {
    title: 'NHÀ CUNG CẤP',
    dataIndex: 'supplier',
    key: 'supplier',
  },
  {
    title: 'TÊN',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'THAO TÁC',
    dataIndex: 'manipulation',
    key: 'manipulation',
    // eslint-disable-next-line react/display-name
    render: (text) => <Button> {text} </Button>,
  },
];
