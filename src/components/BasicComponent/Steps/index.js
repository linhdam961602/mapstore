import React from 'react';
import AntdSteps from 'antd/es/steps';
import 'antd/es/steps/style/css';
import classNames from 'classnames';

import './styles.scss';

const { Step } = AntdSteps;

function Steps({ className, ...props }) {
  const classes = classNames({
    tino__steps: true,
    [className]: className,
  });
  return <AntdSteps {...props} className={classes}></AntdSteps>;
}

Steps.Step = Step;

export default Steps;
