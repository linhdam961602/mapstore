import React from 'react';
import Spin from 'antd/es/spin';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'antd/es/spin/style/css';

function Spinner({ className, children, ...props }) {
  const classes = classNames({
    tino__spinner: true,
    [className]: className || '',
  });

  return (
    <Spin {...props} className={classes}>
      {children}
    </Spin>
  );
}

Spinner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  /** Specifies a delay in milliseconds for loading state (prevent flush)	 */
  delay: PropTypes.number,
  /** React node of the spinning indicator */
  indicator: PropTypes.node,
  /** Define whether Spin is spinning */
  spinning: PropTypes.bool,
  /** Size of Spin, options: small, default and large	 */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /** className of wrapper when Spin has children */
  wrapperClassName: PropTypes.string,
  /** Customize description content when Spin has children */
  tip: PropTypes.string,
};

Spinner.defaultProps = {
  children: null,
  className: '',
  size: 'default',
  spinning: true,
};

export default Spinner;
