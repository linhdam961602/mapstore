import React, { useMemo } from 'react';
import zxcvbn from 'zxcvbn';

import styles from './styles.module.scss';

const PasswordStrengthMeter = ({
  password = '',
  onStrengthChange = () => {},
}) => {
  const testResult = useMemo(() => zxcvbn(password), [password]);

  const funcProgressColor = useMemo(() => {
    onStrengthChange(testResult.score);
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }, [onStrengthChange, testResult.score]);

  const changePasswordColor = useMemo(
    () => ({
      width: `${(testResult.score * 100) / 4}%`,
      background: funcProgressColor,
    }),
    [funcProgressColor, testResult.score],
  );

  return (
    <div className={styles['password-meter__container']}>
      <div className={styles['password-meter__progress']}>
        <div
          className={styles['password-meter__progress-bar']}
          style={changePasswordColor}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
