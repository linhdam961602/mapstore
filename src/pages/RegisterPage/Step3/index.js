/* eslint-disable indent */
import React, { useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  REGISTER_FORM_FIELDS,
  TERMS_OF_SERVICE_URL,
  INITIAL_VALUES,
} from '../constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import DatePicker from 'components/BasicComponent/DatePicker';
import Checkbox from 'components/BasicComponent/Checkbox';
import { RECAPTCHA_SITE_KEY } from 'constants/common';
import { TYPES_OF_CURRENCY } from 'constants/options';
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  initialState as languageInitialState,
  languageSliceName,
} from 'containers/LanguageProviderContainer/slices';
import AddressInput from 'containers/AddressInputContainer';
import { onlyNumber } from 'utils';

const { Row, Col } = Grid;

const Step3 = ({ form, getTextCommon }) => {
  const { width } = useWindowDimensions();

  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], languageInitialState.locale),
  );

  const onCountryChange = useCallback(() => {
    form.setFieldsValue({
      [REGISTER_FORM_FIELDS.CITY]: '',
      [REGISTER_FORM_FIELDS.STATE]: '',
      [REGISTER_FORM_FIELDS.ADDRESS_1]: '',
    });
  }, [form]);

  const onProvinceChange = useCallback(() => {
    // Clear current selected district
    form.setFieldsValue({
      [REGISTER_FORM_FIELDS.STATE]: '',
      [REGISTER_FORM_FIELDS.ADDRESS_1]: '',
    });
  }, [form]);

  return (
    <>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.BIRTHDAY}
            label={getTextCommon('userInfo.labels.birthday')}
            rules={[{ required: true }]}
          >
            <DatePicker locale={locale} />
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.NATIONAL_ID}
            label={getTextCommon('userInfo.labels.idPp')}
            rules={[{ required: true }]}
          >
            <Input onKeyDown={onlyNumber} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <AddressInput
          defaultCountry={INITIAL_VALUES[REGISTER_FORM_FIELDS.COUNTRY]}
          renderCountryWrapper={(children) => (
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.COUNTRY}
                label={getTextCommon('userInfo.labels.country')}
              >
                {children}
              </Form.Item>
            </Col>
          )}
          onCountryChange={onCountryChange}
          renderProvinceWrapper={(children) => (
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.CITY}
                label={getTextCommon('userInfo.labels.province')}
              >
                {children}
              </Form.Item>
            </Col>
          )}
          onProvinceChange={onProvinceChange}
          renderDistrictWrapper={(children) => (
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.STATE}
                label={getTextCommon('userInfo.labels.district')}
              >
                {children}
              </Form.Item>
            </Col>
          )}
          renderAddressWrapper={(children) => (
            <Col lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.ADDRESS_1}
                label={getTextCommon('userInfo.labels.address')}
              >
                {children}
              </Form.Item>
            </Col>
          )}
        />
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
                : Promise.reject(new Error(getTextCommon('error.recaptcha'))),
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
                : Promise.reject(new Error(getTextCommon('error.agreement'))),
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
