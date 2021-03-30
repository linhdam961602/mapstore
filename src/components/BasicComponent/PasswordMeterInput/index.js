import React, { useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import zxcvbn from 'zxcvbn';
import { InfoCircleFilled } from '@ant-design/icons';
import classNames from 'classnames';

import Input from '../Input';
import Tooltip from '../Tooltip';

import styles from './styles.module.scss';

import { createTranslatedText } from 'utils/text';

const PasswordMeterInput = ({ value = '', onChange = () => {}, ...props }) => {
  const intl = useIntl();
  const getText = createTranslatedText('common', intl);

  const testResult = useMemo(() => zxcvbn(value), [value]);
  const [passwordScore, setPasswordScore] = useState(0);

  const handleInputChange = useCallback(
    (e) => {
      onChange(e);
      const { score } = zxcvbn(e.target.value);
      setPasswordScore(score);
    },
    [onChange],
  );

  const progressBarClasses = classNames({
    [styles['password-meter__progress-bar']]: true,
    [styles[`password-meter__score--${testResult.score}`]]: testResult.score,
  });

  /**
   * Convert password score to strength label
   */
  const passwordStrength = useMemo(() => {
    switch (passwordScore) {
      case 0:
        return getText('tooltip.passwordStrength.veryWeak');
      case 1:
        return getText('tooltip.passwordStrength.weak');
      case 2:
        return getText('tooltip.passwordStrength.fair');
      case 3:
        return getText('tooltip.passwordStrength.good');
      case 4:
        return getText('tooltip.passwordStrength.strong');
      default:
        return '';
    }
  }, [getText, passwordScore]);

  return (
    <>
      <Input
        type="password"
        onChange={handleInputChange}
        suffix={
          <>
            <span className={styles['password-strength-label']}>
              {value !== ''
                ? passwordStrength
                : getText('tooltip.passwordStrength.placeholder')}
            </span>
            <Tooltip title={getText('tooltip.password')}>
              <InfoCircleFilled style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          </>
        }
        {...props}
      />
      <div className={styles['password-meter__container']}>
        <div className={styles['password-meter__progress']}>
          <div className={progressBarClasses} />
        </div>
      </div>
    </>
  );
};

export default PasswordMeterInput;
