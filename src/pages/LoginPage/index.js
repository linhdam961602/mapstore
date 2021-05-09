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

import { authActions, authSaga, authSliceName } from './slices';

import { LOGIN_FORM_FIELDS } from './constants';
import './styles.scss';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import { useInjectSaga } from 'hooks/useInjector';
import Divider from 'components/BasicComponent/Divider';
import { FORGOT_URL, REGISTER_URL } from 'constants/routes';
import { createTranslatedText } from 'utils/text';
import FluidLayout from 'components/LayoutComponent/FluidLayout';

const LoginPage = () => {
  const intl = useIntl();
  const getText = createTranslatedText('login', intl);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useInjectSaga({ key: authSliceName, saga: authSaga });

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();

    dispatch(authActions.login(values));
  }, [dispatch, form]);

  return (
    <FluidLayout>
      <Form
        className="login__form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <h1 className="login__title">{getText('title')}</h1>
        <Form.Item
          name={LOGIN_FORM_FIELDS.USERNAME}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
              // TODO: translation
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder={getText('placeholders.email')} />
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
            placeholder={getText('placeholders.password')}
          />
        </Form.Item>
        <div className="login__remember-me">
          <Form.Item
            name={LOGIN_FORM_FIELDS.REMEMBER}
            valuePropName="checked"
            noStyle
          >
            <Checkbox>{getText('text.rememberMe')}</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href={FORGOT_URL}>
            {getText('text.forgotPassword')}
          </a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {getText('buttons.login')}
          </Button>
        </Form.Item>
        <div className="login__create-account">
          <span>{getText('text.notAMember')}</span>
          <a href={REGISTER_URL}>{getText('text.createAcc')}</a>
        </div>
        <Divider plain>{getText('text.useAcc')}</Divider>
        {/* TODO: integrate later
          <GoogleLogin
            clientId={GOOGLE_OAUTH_CLIENT_KEY}
            render={(renderProps) => (
              <Button
                className="login__button-with-google"
                block
                icon={<GoogleOutlined style={{ color: '#ec5741' }} />}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                {getText('buttons.loginWGoogle')}
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          /> */}
        <Button
          className="login__button-with-google"
          block
          icon={<GoogleOutlined style={{ color: '#ec5741' }} />}
        >
          {getText('buttons.loginWGoogle')}
        </Button>
      </Form>
    </FluidLayout>
  );
};
export default LoginPage;
