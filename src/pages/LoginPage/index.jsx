/**
 *
 * Login Page
 *
 * This is the login page.
 */
import React from 'react';
import { useIntl } from 'react-intl';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';

const LoginPage = () => {
  const intl = useIntl();

  return (
    <Form
      name={intl.formatMessage({
        id: 'login.title',
      })}
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="email"
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
        name="password"
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          {intl.formatMessage({
            id: 'login.buttons.login',
          })}
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
