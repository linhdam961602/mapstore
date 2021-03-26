/**
 *
 * Login Page
 *
 * This is the login page.
 */
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { useDispatch } from 'react-redux';

import { authActions } from '../slices';

import { LOGIN_FORM_FIELDS } from './constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';

const LoginPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();
    dispatch(authActions.login(values));
  }, [dispatch, form]);

  return (
    <div>
      <div>
        {intl.formatMessage({
          id: 'login.title',
        })}
      </div>
      <Form
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name={LOGIN_FORM_FIELDS.USERNAME}
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
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
        <Form.Item>
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
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {intl.formatMessage({
              id: 'login.buttons.login',
            })}
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
