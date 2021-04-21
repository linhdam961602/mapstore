import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { REGISTER_FORM_FIELDS, TERMS_OF_SERVICE_URL } from '../constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import DatePicker from 'components/BasicComponent/DatePicker';
import Checkbox from 'components/BasicComponent/Checkbox';
import { RECAPTCHA_SITE_KEY } from 'constants/common';
import { TYPES_OF_CURRENCY } from 'constants/options';
import useWindowDimensions from 'hooks/useWindowDimensions';

const { Row, Col } = Grid;

const Step3 = ({ getTextCommon }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.BIRTHDAY}
            label={getTextCommon('userInfo.labels.birthday')}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.NATIONAL_ID}
            label={getTextCommon('userInfo.labels.idPp')}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.COUNTRY}
            label={getTextCommon('userInfo.labels.country')}
          >
            <Select />
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.CITY}
            label={getTextCommon('userInfo.labels.province')}
          >
            <Select />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.STATE}
            label={getTextCommon('userInfo.labels.district')}
          >
            <Select />
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.ADDRESS_1}
            label={getTextCommon('userInfo.labels.address')}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.CURRENCY}
            label={getTextCommon('userInfo.labels.currency')}
          >
            <Select options={Object.values(TYPES_OF_CURRENCY)} disabled />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name={REGISTER_FORM_FIELDS.RECAPTCHA}
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(getTextCommon('errors.recaptcha'))),
          },
        ]}
      >
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          size={width <= 425 ? 'compact' : 'normal'}
        />
      </Form.Item>

      <Form.Item
        name={REGISTER_FORM_FIELDS.AGREEMENT}
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(getTextCommon('errors.agreement'))),
          },
        ]}
      >
        <Checkbox>
          {getTextCommon('userInfo.labels.agreement')}
          <a href={TERMS_OF_SERVICE_URL} target="_blank">
            {getTextCommon('userInfo.labels.termsOfService')}
          </a>
        </Checkbox>
      </Form.Item>
    </>
  );
};

export default Step3;
