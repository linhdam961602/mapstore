/**
 *
 * Register Page
 *
 * This is the Register page.
 */
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  INITIAL_VALUES,
  REGISTER_FORM_FIELDS,
  TERMS_OF_SERVICE_URL,
} from './constants';
import styles from './styles.module.scss';
import {
  registerSliceName,
  registerReducer,
  registerSaga,
  registerActions,
} from './slices';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Checkbox from 'components/BasicComponent/Checkbox';
import Button from 'components/BasicComponent/Button';
import Divider from 'components/BasicComponent/Divider';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import PasswordMeterInput from 'components/BasicComponent/PasswordMeterInput';
import PhoneInput from 'containers/PhoneInputContainer';
import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';
import {
  TYPES_OF_PERSONAL_TITLE,
  TYPES_OF_SUBJECT,
  TYPES_OF_HOW_TO_FIND,
  TYPES_OF_CURRENCY,
} from 'constants/options';
import { LAYOUT_12_12, LAYOUT_8_16 } from 'constants/form';
import { createTranslatedText } from 'utils/text';
import { RECAPTCHA_SITE_KEY } from 'constants/common';
import { onlyNumber } from 'utils';
import DatePicker from 'components/BasicComponent/DatePicker';

const { Row, Col } = Grid;

const RegisterPage = () => {
  useInjectReducer({ key: registerSliceName, reducer: registerReducer });
  useInjectSaga({ key: registerSliceName, saga: registerSaga });

  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getText = createTranslatedText('registration', intl);

  const [curType, setCurType] = useState(null);

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();
    dispatch(registerActions.signup(values));
  }, [dispatch, form]);

  const onConfirmPassword = useCallback(() => {
    // Confirm password
  }, []);

  const onTypeChange = useCallback((value) => {
    setCurType(value);
  }, []);

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

          <Row gutter={16}>
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.TYPE}
                label={getText('labels.typeOfSubj')}
              >
                <Select
                  options={Object.values(TYPES_OF_SUBJECT)}
                  onChange={onTypeChange}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Company Information */}
          {curType === TYPES_OF_SUBJECT.COMPANY.value && (
            <div>
              <h3 className={styles['register__form-section--title']}>
                {getText('headings.compInfo')}
              </h3>
              <Row gutter={16}>
                <Col md={12} xs={24}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.COMPANY_NAME}
                    label={getText('labels.compName')}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                  <Form.Item
                    name={REGISTER_FORM_FIELDS.TAX_ID}
                    label={getText('labels.taxCode')}
                  >
                    <Input onKeyDown={onlyNumber} />
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
              <Col lg={8} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PERSONAL_TITLE}
                  label={getText('labels.youAre')}
                >
                  <Select options={Object.values(TYPES_OF_PERSONAL_TITLE)} />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.LAST_NAME}
                  label={getText('labels.lastName')}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} md={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.FIRST_NAME}
                  label={getText('labels.firstName')}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.EMAIL}
                  label={getText('labels.email')}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item name={REGISTER_FORM_FIELDS.CALLING_CODE} hidden>
                  <Input />
                </Form.Item>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.PHONE}
                  label={getText('labels.phone')}
                  rules={[{ required: true }]}
                >
                  <PhoneInput
                    className={styles['register__phone-input']}
                    countryCode={form.getFieldValue(
                      REGISTER_FORM_FIELDS.CALLING_CODE,
                    )}
                    onChangeCountry={(value) => {
                      form.setFieldsValue({
                        [REGISTER_FORM_FIELDS.CALLING_CODE]: value,
                      });
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.BIRTHDAY}
                  label={getText('labels.birthday')}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.NATIONAL_ID}
                  label={getText('labels.idPp')}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.COUNTRY}
                  label={getText('labels.country')}
                >
                  <Select />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.CITY}
                  label={getText('labels.province')}
                >
                  <Select />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.STATE}
                  label={getText('labels.district')}
                >
                  <Select />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.ADDRESS_1}
                  label={getText('labels.address')}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <Form.Item
                  name={REGISTER_FORM_FIELDS.CURRENCY}
                  label={getText('labels.currency')}
                >
                  <Select options={Object.values(TYPES_OF_CURRENCY)} />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Divider />
          <Row gutter={16}>
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.HOW_TO_FIND}
                label={getText('labels.howFindUs')}
                {...LAYOUT_12_12}
              >
                <Select options={Object.values(TYPES_OF_HOW_TO_FIND)} />
              </Form.Item>
            </Col>
          </Row>
          {/* Account Security */}
          <h3 className={styles['register__form-section--title']}>
            {getText('headings.accSec')}
          </h3>
          <Row gutter={16}>
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.PASSWORD}
                label={getText('labels.password')}
                rules={[{ required: true }]}
              >
                <PasswordMeterInput />
              </Form.Item>
            </Col>
            <Col lg={12} xs={24}>
              <Form.Item
                label={getText('labels.repassword')}
                rules={[{ required: true }]}
              >
                <Input type="password" onChange={onConfirmPassword} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={() => {
                // Handle Check captcha
              }}
            />
          </Form.Item>

          <Form.Item valuePropName="checked">
            <Checkbox>
              {getText('labels.agreement')}
              <a href={TERMS_OF_SERVICE_URL} target="_blank">
                {getText('labels.termsOfService')}
              </a>
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
