import notification from 'antd/es/notification';

import 'antd/es/notification/style/css';
import { intl } from 'containers/LanguageProviderContainer';

export const SUCCESS_TYPE = 'success';
export const INFO_TYPE = 'info';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';

export function showNotification({
  type,
  message: description,
  top = 70,
  ...options
}) {
  notification[type]({
    message: intl.formatMessage({
      id: `notification.messageTitle.${type}`,
    }),
    description,
    ...options,
    duration: 3,
    top,
  });
}

export default showNotification;
