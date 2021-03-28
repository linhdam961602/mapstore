/**
 *
 * Register Page
 *
 * This is the Register page.
 */
import React, { useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
// import { useDispatch } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';

import { authSaga, authSliceName } from '../slices';

import { INITIAL_VALUES, REGISTER_FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import Divider from 'components/BasicComponent/Divider';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import Tooltip from 'components/BasicComponent/Tooltip';
import PasswordStrengthMeter from 'components/BasicComponent/PasswordStrengthMeter';
import PhoneInput from 'containers/PhoneInputContainer';
import { useInjectSaga } from 'hooks/useInjector';
import {
  TYPES_OF_PERSONAL_TITLE,
  TYPES_OF_SUBJECT,
  TYPES_OF_HOW_TO_FIND,
} from 'constants/options';
import { LAYOUT_8_16 } from 'constants/form';
import { createTranslatedText } from 'utils/text';
import { RECAPTCHA_SITE_KEY } from 'constants/common';

const { Row, Col } = Grid;

const RegisterPage = () => {
  const intl = useIntl();
  // const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getText = createTranslatedText('registration', intl);

  const [curPassword, setCurPassword] = useState('');
  const [curType, setCurType] = useState(null);
  const [passwordScore, setPasswordScore] = useState(0);

  useInjectSaga({ key: authSliceName, saga: authSaga });

  const onFinish = useCallback(() => {
    // const values = form.getFieldsValue();
    // dispatch(authActions.signup(values));
  }, []);

  const onConfirmPassword = useCallback(() => {
    // Confirm password
  }, []);

  const onPasswordChange = useCallback((e) => {
    setCurPassword(e.target.value);
  }, []);

  const onTypeChange = useCallback((value) => {
    setCurType(value);
  }, []);

  const passwordStrength = useMemo(() => {
    switch (passwordScore) {
      case 0:
        return 'Very weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fear';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  }, [passwordScore]);

  return (
    <div className={styles.register__background}>
      <div className={styles.register__container}>
        <Form
          className={styles.register__form}
          initialValues={INITIAL_VALUES}
          onFinish={onFinish}
          form={form}
          {...LAYOUT_8_16}
          labelAlign="left"
        >
          <h1 className={styles.register__title}>{getText('title')}</h1>
          <Form.Item
            name={REGISTER_FORM_FIELDS.TYPE}
            label={getText('labels.typeOfSubj')}
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
                {getText('headings.compInfo')}
              </h3>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.COMPANY_NAME}
                    label={getText('labels.compName')}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.TAX_ID}
                    label={getText('labels.taxCode')}
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
              {getText('headings.perInfo')}
            </h3>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PERSONAL_TITLE}
                  label={getText('labels.youAre')}
                >
                  <Select options={Object.values(TYPES_OF_PERSONAL_TITLE)} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.LAST_NAME}
                  label={getText('labels.lastName')}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.FIRST_NAME}
                  label={getText('labels.firstName')}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.EMAIL}
                  label={getText('labels.email')}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PHONE}
                  label={getText('labels.phone')}
                >
                  {/* TODO: Select dial code */}
                  <PhoneInput className={styles['register__phone-input']} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.NATIONAL_ID}
                  label={getText('labels.idPp')}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.COUNTRY}
                  label={getText('labels.country')}
                >
                  <Select />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.CITY}
                  label={getText('labels.province')}
                >
                  <Select />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.STATE}
                  label={getText('labels.district')}
                >
                  <Select />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Form.Item
              name={REGISTER_FORM_FIELDS.HOW_TO_FIND}
              label={getText('labels.howFindUs')}
            >
              <Select options={Object.values(TYPES_OF_HOW_TO_FIND)} />
            </Form.Item>
          </div>
          {/* Account Security */}
          <h3 className={styles['register__form-section--title']}>
            {getText('headings.accSec')}
          </h3>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.PASSWORD}
                label={getText('labels.password')}
              >
                <Input
                  type="password"
                  onChange={onPasswordChange}
                  suffix={
                    <>
                      <span>{passwordStrength}</span>
                      <Tooltip title={getText('tooltip.password')}>
                        <InfoCircleOutlined
                          style={{ color: 'rgba(0,0,0,.45)' }}
                        />
                      </Tooltip>
                    </>
                  }
                />
                <PasswordStrengthMeter
                  password={curPassword}
                  onStrengthChange={(score) => {
                    setPasswordScore(score);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={getText('labels.repassword')}>
                <Input type="password" onChange={onConfirmPassword} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name={REGISTER_FORM_FIELDS.RECAPTCHA}>
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={() => {}} />
          </Form.Item>

          <Form.Item valuePropName="checked">
            <Checkbox>
              {getText('labels.agreement')}
              <a href="">{getText('labels.termsOfService')}</a>
            </Checkbox>
          </Form.Item>
          <div className={styles['register__button-wrapper']}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.register__button}
            >
              {getText('buttons.register')}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
