import * as React from 'react';
import AntdStatistic from 'antd/es/statistic';
import 'antd/es/statistic/style/css';

import './styles.scss';

const Statistic = (props) => (
  <div className="statistic">
    <AntdStatistic {...props} />
  </div>
);

export default Statistic;
