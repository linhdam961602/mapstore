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
import styles from './styles.module.scss';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import { useInjectSaga } from 'hooks/useInjector';
import Divider from 'components/BasicComponent/Divider';
import { REGISTER_URL } from 'constants/routes';
import { createTranslatedText } from 'utils/text';
import illustration from 'assets/images/illustration.svg';

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
    <div className={styles.login__background}>
      <div className={styles.login__container}>
        <div className={styles['login__left-container']}>
          <img
            alt="Icewall Tailwind HTML Admin Template"
            className="-intro-x w-1/2 -mt-16"
            src={illustration}
          />
        </div>
        <Form
          className={styles.login__form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          form={form}
        >
          <h1 className={styles.login__title}>{getText('title')}</h1>
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
          <div className={styles['login__remember-me']}>
            <Form.Item
              name={LOGIN_FORM_FIELDS.REMEMBER}
              valuePropName="checked"
              noStyle
            >
              <Checkbox>{getText('text.rememberMe')}</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              {getText('text.forgotPassword')}
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {getText('buttons.login')}
            </Button>
          </Form.Item>
          <div className={styles['login__create-account']}>
            <span>{getText('text.notAMember')}</span>
            <a href={REGISTER_URL}>{getText('text.createAcc')}</a>
          </div>
          <Divider plain>{getText('text.useAcc')}</Divider>
          <Button
            className={styles['login__button-with-google']}
            block
            icon={<GoogleOutlined style={{ color: '#ec5741' }} />}
          >
            {getText('buttons.loginWGoogle')}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
