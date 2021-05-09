import { put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import { notificationActions } from 'containers/NotificationContainer/slices';

import { ERROR_TYPE } from 'components/BasicComponent/Notification';
import { intl } from 'containers/LanguageProviderContainer';
import { createTranslatedText } from 'utils/text';
import * as authHelper from 'utils/authHelper';
import { INVALID_TOKEN, UNAUTHORIZED, TOKEN_EXPIRED } from 'constants/auth';

const getText = createTranslatedText('common.error', intl);
const ERROR_HANDLER = 'ERROR_HANDLER';

export const errorHandler = (payload) => ({
  type: ERROR_HANDLER,
  payload,
});

function* handler(action) {
  const error = get(action, 'payload', {});

  if (error && error.messageCodes) {
    let message = '';
    // eslint-disable-next-line array-callback-return
    error.messageCodes.map((msg) => {
      const hasMessage = !!intl.messages[`common.error.${msg}`];
      message += hasMessage ? getText(msg) : msg;
    });

    yield put(
      notificationActions.showNotification({
        type: ERROR_TYPE,
        message,
      }),
    );

    if (
      error.messageCodes.includes(INVALID_TOKEN) ||
      error.messageCodes.includes(UNAUTHORIZED) ||
      error.messageCodes.includes(TOKEN_EXPIRED)
    ) {
      // Kickout user
      authHelper.clearUserCredential();
      authHelper.redirectFromLogin();
    }
  }
  // Add ModalContainer on the page that required modal
  if (error) {
    switch (error.messageCodes) {
      default: {
        yield put(
          notificationActions.showNotification({
            type: ERROR_TYPE,
            message: error.messageContent,
          }),
        );
        break;
      }
    }
  }
}
export default function* errorHandlerSaga() {
  yield takeLatest(ERROR_HANDLER, handler);
}
