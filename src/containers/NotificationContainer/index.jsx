/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import showNotification from 'components/BasicComponents/Notification';

import transform from 'lodash/transform';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';
import { useIntl } from 'react-intl';
import get from 'lodash/get';

import {
  notificationActions,
  notificationReducer,
  notificationSliceName,
  initialState,
} from './slices';

import { useInjectReducer } from 'hooks/useInjector';

// Translate message keys in params object
// Ex { name: "company.info.name" } => { name: "Company info" }
const formatParamsMessage = (params, intl) => {
  if (!isPlainObject(params)) return {};

  return transform(params, (result, value, pKey) => {
    result[pKey] = intl.formatMessage({ id: value });
    return result;
  });
};

const formatMessage = (message, intl) => {
  let pFormatMessage = '';
  // Translate an array of message keys
  if (Array.isArray(message)) {
    pFormatMessage = message.map(
      (msgId) =>
        `${intl.formatMessage({
          id: msgId,
          defaultMessage: '메시지를 찾을 수 없습니다.',
        })}\n`,
    );
  }
  // Translate an message object with its param
  else if (isPlainObject(message) && isString(message.id)) {
    return intl.formatMessage(
      { id: message.id, defaultMessage: '메시지를 찾을 수 없습니다.' },
      formatParamsMessage(message.params, intl),
    );
  }
  // Translate a normal message key
  else if (isString(message)) {
    pFormatMessage = message;
  }
  return pFormatMessage;
};

export function NotificationContainer() {
  const intl = useIntl();
  useInjectReducer({
    key: notificationSliceName,
    reducer: notificationReducer,
  });

  const dispatch = useDispatch();
  const currentNotification = useSelector(
    (state) =>
      get(
        state,
        [notificationSliceName, 'currentNotification'],
        initialState.currentNotification,
      ),
    shallowEqual,
  );
  useEffect(() => {
    if (
      currentNotification &&
      currentNotification.type &&
      currentNotification.message
    ) {
      showNotification({
        ...currentNotification,
        message: formatMessage(currentNotification.message, intl),
        onClose: () => {
          dispatch(notificationActions.removeNotification());
        },
      });
    }
  });

  return null;
}
