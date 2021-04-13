/* eslint-disable react/display-name */
/**
 *
 * Register Page
 *
 * This is the Register page.
 */
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import { FORGOT_PASSWORD_FORM_FIELDS, INITIAL_VALUES } from './constants';
import './styles.scss';
import {
  forgotPasswordSliceName,
  forgotPasswordReducer,
  forgotPasswordSaga,
  forgotPasswordActions,
  initialState,
} from './slices';

import Form from 'components/BasicComponent/Form';
import Button from 'components/BasicComponent/Button';
import Input from 'components/BasicComponent/Input';

import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';
import { VALIDATION_MESSAGES } from 'constants/form';
import { createTranslatedText } from 'utils/text';
import illustration from 'assets/images/illustration.svg';
import LanguageSelector from 'containers/TopBar/LanguageSelector';
import Spinner from 'components/BasicComponent/Spinner';

const ForgotPasswordPage = () => {
  useInjectReducer({
    key: forgotPasswordSliceName,
    reducer: forgotPasswordReducer,
  });
  useInjectSaga({ key: forgotPasswordSliceName, saga: forgotPasswordSaga });

  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getText = createTranslatedText('forgotPassword', intl);

  const isLoading = useSelector((state) =>
    get(state, [forgotPasswordSliceName, 'isLoading'], initialState.isLoading),
  );

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();

    dispatch(forgotPasswordActions.forgotPassword(values));
  }, [dispatch, form]);

  return (
    <Spinner spinning={isLoading}>
      <div className="login__background">
        <div className="login__language">
          <LanguageSelector />
        </div>
        <div className="login__container">
          <div className="login__left-container">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              src={illustration}
            />
            {/* TODO: logo */}
          </div>
          <Form
            className="login__form"
            initialValues={INITIAL_VALUES}
            onFinish={onFinish}
            form={form}
            labelAlign="left"
            validateMessages={VALIDATION_MESSAGES}
          >
            <h1 className="login__title">{getText('title')}</h1>
            <Form.Item
              name={FORGOT_PASSWORD_FORM_FIELDS.EMAIL}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder={getText('placeholders.email')} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {getText('buttons.submit')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Spinner>
  );
};
export default ForgotPasswordPage;
