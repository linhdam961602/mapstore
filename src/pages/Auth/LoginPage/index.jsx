/**
 *
 * Login Page
 *
 * This is the login page.
 */
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { GoogleOutlined } from '@ant-design/icons';

import { authActions, authReducer, authSaga, authSliceName } from '../slices';

import { LOGIN_FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';
import Divider from 'components/BasicComponent/Divider';
import { REGISTER_URL } from 'constants/routes';

const LoginPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useInjectReducer({ key: authSliceName, reducer: authReducer });
  useInjectSaga({ key: authSliceName, saga: authSaga });

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();
    dispatch(authActions.login(values));
  }, [dispatch, form]);

  return (
    <div className={styles.login__background}>
      <div className={styles.login__container}>
        <Form
          className={styles.login__form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          form={form}
        >
          <h1 className={styles.login__title}>
            {intl.formatMessage({
              id: 'login.title',
            })}
          </h1>
          <Form.Item
            name={LOGIN_FORM_FIELDS.USERNAME}
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
            <Input
              placeholder={intl.formatMessage({
                id: 'login.placeholders.email',
              })}
            />
          </Form.Item>
          <Form.Item
            name={LOGIN_FORM_FIELDS.PASSWORD}
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              type="password"
              placeholder={intl.formatMessage({
                id: 'login.placeholders.password',
              })}
            />
          </Form.Item>
          <div className={styles['login__remember-me']}>
            <Form.Item
              name={LOGIN_FORM_FIELDS.REMEMBER}
              valuePropName="checked"
              noStyle
            >
              <Checkbox>
                {intl.formatMessage({
                  id: 'login.text.rememberMe',
                })}
              </Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              {intl.formatMessage({
                id: 'login.text.forgotPassword',
              })}
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {intl.formatMessage({
                id: 'login.buttons.login',
              })}
            </Button>
          </Form.Item>
          <div className={styles['login__create-account']}>
            <span>
              {intl.formatMessage({
                id: 'login.text.notAMember',
              })}
            </span>
            <a href={REGISTER_URL}>
              {intl.formatMessage({
                id: 'login.text.createAcc',
              })}
            </a>
          </div>
          <Divider plain>
            {intl.formatMessage({
              id: 'login.text.useAcc',
            })}
          </Divider>
          <Button
            className={styles['login__button-with-google']}
            block
            icon={<GoogleOutlined style={{ color: '#ec5741' }} />}
          >
            {intl.formatMessage({
              id: 'login.buttons.loginWGoogle',
            })}
          </Button>
        </Form>

        <div className={styles.login__foreground} />
      </div>
    </div>
  );
};
export default LoginPage;
