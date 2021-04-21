import React from 'react';

import { REGISTER_FORM_FIELDS } from '../constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Grid from 'components/BasicComponent/Grid';
import PhoneInput from 'containers/PhoneInputContainer';
import PasswordMeterInput from 'components/BasicComponent/PasswordMeterInput';
import { REGEX_EMAIL, REGEX_PASSWORD } from 'constants/common';

const { Row, Col } = Grid;

const Step2 = ({ form, getTextCommon, getTextRegistration }) => (
  <>
    {/* Personal Information */}
    <h3 className="register__form-section--title">
      {getTextRegistration('headings.perInfo')}
    </h3>
    <Row gutter={16}>
      <Col md={12} xs={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.LAST_NAME}
          label={getTextCommon('userInfo.labels.lastName')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col md={12} xs={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.FIRST_NAME}
          label={getTextCommon('userInfo.labels.firstName')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.EMAIL}
          label={getTextCommon('userInfo.labels.email')}
          rules={[
            { required: true },
            {
              pattern: REGEX_EMAIL,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={REGISTER_FORM_FIELDS.CALLING_CODE} hidden>
          <Input />
        </Form.Item>
        <Form.Item
          name={REGISTER_FORM_FIELDS.PHONE}
          label={getTextCommon('userInfo.labels.phone')}
          rules={[{ required: true }]}
        >
          <PhoneInput
            disabledDropdown
            className="register__phone-input"
            countryCode={form.getFieldValue(REGISTER_FORM_FIELDS.CALLING_CODE)}
            onChangeCountry={(value) => {
              form.setFieldsValue({
                [REGISTER_FORM_FIELDS.CALLING_CODE]: value,
              });
            }}
          />
        </Form.Item>
      </Col>
    </Row>

    {/* Account Security */}
    <h3 className="register__form-section--title">
      {getTextRegistration('headings.accSec')}
    </h3>
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.PASSWORD}
          label={getTextCommon('userInfo.labels.password')}
          rules={[
            { required: true },
            {
              pattern: REGEX_PASSWORD,
            },
          ]}
        >
          <PasswordMeterInput />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.PASSWORD_2}
          label={getTextCommon('userInfo.labels.repassword')}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue(REGISTER_FORM_FIELDS.PASSWORD) === value
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!'), // TODO: update translation
                );
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
      </Col>
    </Row>
  </>
);

export default Step2;
