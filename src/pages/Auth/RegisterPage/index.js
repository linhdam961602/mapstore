/**
 *
 * Register Page
 *
 * This is the Register page.
 */
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
// import { useDispatch } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';

import { authSaga, authSliceName } from '../slices';

import { REGISTER_FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import Divider from 'components/BasicComponent/Divider';
import Select from 'components/BasicComponent/Select';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Tooltip from 'components/BasicComponent/Tooltip';
import { useInjectSaga } from 'hooks/useInjector';
import {
  TYPES_OF_PERSONAL_TITLE,
  TYPES_OF_SUBJECT,
  TYPES_OF_HOW_TO_FIND,
} from 'constants/options';
import { LAYOUT_8_16 } from 'constants/form';

const RegisterPage = () => {
  const intl = useIntl();
  // const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [, setCurPassword] = useState('');
  const [curType, setCurType] = useState(null);

  useInjectSaga({ key: authSliceName, saga: authSaga });

  const onFinish = useCallback(() => {
    // const values = form.getFieldsValue();
    // dispatch(authActions.signup(values));
  }, []);

  const onConfirmPassword = useCallback(() => {
    // Confirm password
  }, []);

  const onPasswordChange = useCallback((value) => {
    setCurPassword(value);
  }, []);

  const onTypeChange = useCallback((value) => {
    setCurType(value);
  }, []);

  return (
    <div className={styles.register__background}>
      <div className={styles.register__container}>
        <Form
          className={styles.register__form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          form={form}
          {...LAYOUT_8_16}
          labelAlign="left"
        >
          <h1 className={styles.register__title}>
            {intl.formatMessage({
              id: 'registration.title',
            })}
          </h1>
          <Form.Item
            name={REGISTER_FORM_FIELDS.TYPE}
            label={intl.formatMessage({
              id: 'registration.labels.typeOfSubj',
            })}
          >
            <Select
              options={Object.values(TYPES_OF_SUBJECT)}
              onChange={onTypeChange}
            />
          </Form.Item>
          {/* Company Information */}
          {curType === TYPES_OF_SUBJECT.COMPANY.value && (
            <div>
              <h3 className={styles['register__form-section--title']}>
                {intl.formatMessage({
                  id: 'registration.headings.compInfo',
                })}
              </h3>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.COMPANY_NAME}
                    label={intl.formatMessage({
                      id: 'registration.labels.compName',
                    })}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.TAX_ID}
                    label={intl.formatMessage({
                      id: 'registration.labels.taxCode',
                    })}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          )}
          {/* Personal Information */}
          <div>
            <h3 className={styles['register__form-section--title']}>
              {intl.formatMessage({
                id: 'registration.headings.perInfo',
              })}
            </h3>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PERSONAL_TITLE}
                  label={intl.formatMessage({
                    id: 'registration.labels.youAre',
                  })}
                >
                  <Select options={Object.values(TYPES_OF_PERSONAL_TITLE)} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.LAST_NAME}
                  label={intl.formatMessage({
                    id: 'registration.labels.lastName',
                  })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.FIRST_NAME}
                  label={intl.formatMessage({
                    id: 'registration.labels.firstName',
                  })}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.EMAIL}
                  label={intl.formatMessage({
                    id: 'registration.labels.email',
                  })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PHONE}
                  label={intl.formatMessage({
                    id: 'registration.labels.phone',
                  })}
                >
                  {/* TODO: Select dial code */}
                  <Input
                    addonBefore={<div>+84</div>}
                    className={styles['register__phone-input']}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.NATIONAL_ID}
                  label={intl.formatMessage({
                    id: 'registration.labels.idPp',
                  })}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.COUNTRY}
                  label={intl.formatMessage({
                    id: 'registration.labels.country',
                  })}
                >
                  <Select />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.CITY}
                  label={intl.formatMessage({
                    id: 'registration.labels.province',
                  })}
                >
                  <Select />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.STATE}
                  label={intl.formatMessage({
                    id: 'registration.labels.district',
                  })}
                >
                  <Select />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Form.Item
              name={REGISTER_FORM_FIELDS.HOW_TO_FIND}
              label={intl.formatMessage({
                id: 'registration.labels.howFindUs',
              })}
            >
              <Select options={Object.values(TYPES_OF_HOW_TO_FIND)} />
            </Form.Item>
          </div>
          {/* Account Security */}
          <h3 className={styles['register__form-section--title']}>
            {intl.formatMessage({
              id: 'registration.headings.accSec',
            })}
          </h3>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.PASSWORD}
                label={intl.formatMessage({
                  id: 'registration.labels.password',
                })}
              >
                <Input
                  type="password"
                  onChange={onPasswordChange}
                  suffix={
                    <Tooltip
                      title={intl.formatMessage({
                        id: 'registration.tooltip.password',
                      })}
                    >
                      <InfoCircleOutlined
                        style={{ color: 'rgba(0,0,0,.45)' }}
                      />
                    </Tooltip>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={intl.formatMessage({
                  id: 'registration.labels.repassword',
                })}
              >
                <Input type="password" onChange={onConfirmPassword} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item valuePropName="checked">
            <Checkbox>
              {intl.formatMessage({
                id: 'registration.labels.agreement',
              })}
              <a href="">
                {intl.formatMessage({
                  id: 'registration.labels.termsOfService',
                })}
              </a>
            </Checkbox>
          </Form.Item>
          <div className={styles['register__button-wrapper']}>
            <Button type="primary" htmlType="submit">
              {intl.formatMessage({
                id: 'registration.buttons.register',
              })}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
