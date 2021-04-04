import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { REGISTER_FORM_FIELDS, TERMS_OF_SERVICE_URL } from '../constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import Divider from 'components/BasicComponent/Divider';
import DatePicker from 'components/BasicComponent/DatePicker';
import Checkbox from 'components/BasicComponent/Checkbox';
import { RECAPTCHA_SITE_KEY } from 'constants/common';
import { LAYOUT_12_12 } from 'constants/form';
import { TYPES_OF_HOW_TO_FIND, TYPES_OF_CURRENCY } from 'constants/options';

const { Row, Col } = Grid;

const Step3 = ({ getText }) => (
  <>
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
    <Divider />
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item
          name={REGISTER_FORM_FIELDS.HOW_TO_FIND}
          label={getText('labels.howFindUs')}
          {...LAYOUT_12_12}
        >
          <Select options={Object.values(TYPES_OF_HOW_TO_FIND)} />
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
  </>
);

export default Step3;
