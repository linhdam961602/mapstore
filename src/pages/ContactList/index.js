import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { CONTACT_LIST_FORM_FIELDS, INITIAL_VALUES } from './constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import DatePicker from 'components/BasicComponent/DatePicker';
import Select from 'components/BasicComponent/Select';
import Button from 'components/BasicComponent/Button';

import { onlyNumber } from 'utils';
import { createTranslatedText } from 'utils/text';
import { REGEX_EMAIL, REGEX_PASSWORD } from 'constants/common';
import { VALIDATION_MESSAGES } from 'constants/form';

import './styles.scss';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import SidebarRight from 'containers/Sidebar/SidebarRight';
import PhoneInput from 'containers/PhoneInputContainer';
import PasswordMeterInput from 'components/BasicComponent/PasswordMeterInput';

const { Item } = Form;

const ContactList = () => {
  const intl = useIntl();
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);
  const getTextCommon = createTranslatedText('common', intl);
  const [form] = Form.useForm();

  const onFinish = useCallback(() => {
    // TODO: Call API save contact
  }, []);

  return (
    <div className="mypage">
      <h1 className="titlePage">{getTextSideBarRight('myInfo')}</h1>
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <Form
            className="my-infor-page"
            initialValues={INITIAL_VALUES}
            onFinish={onFinish}
            form={form}
            labelAlign="left"
            validateMessages={VALIDATION_MESSAGES}
            layout="vertical"
          >
            <div className="form-group">
              <p className="title">
                {getTextCommon('userInfo.groups.chooseContact')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item name={CONTACT_LIST_FORM_FIELDS.CONTACT_ID}>
                    {/* TODO: Integrate API get list contact */}
                    <Select options={null} />
                  </Item>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <p className="title">
                {getTextCommon('userInfo.groups.contactDetail')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.LAST_NAME}
                    label={getTextCommon('userInfo.labels.lastName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                  <Item name={CONTACT_LIST_FORM_FIELDS.POSTCODE} hidden>
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.FIRST_NAME}
                    label={getTextCommon('userInfo.labels.firstName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.BIRTHDAY}
                    label={getTextCommon('userInfo.labels.birthday')}
                  >
                    <DatePicker />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item name={CONTACT_LIST_FORM_FIELDS.CALLING_CODE} hidden>
                    <Input />
                  </Item>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.PHONE}
                    label={getTextCommon('userInfo.labels.phone')}
                    rules={[{ required: true }]}
                  >
                    <PhoneInput
                      disabledDropdown
                      className="register__phone-input"
                      countryCode={form.getFieldValue(
                        CONTACT_LIST_FORM_FIELDS.CALLING_CODE,
                      )}
                      onChangeCountry={(value) => {
                        form.setFieldsValue({
                          [CONTACT_LIST_FORM_FIELDS.CALLING_CODE]: value,
                        });
                      }}
                    />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.EMAIL}
                    label={getTextCommon('userInfo.labels.email')}
                    rules={[
                      { required: true },
                      {
                        pattern: REGEX_EMAIL,
                      },
                    ]}
                  >
                    <Input />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.COMPANY_NAME}
                    label={getTextCommon('userInfo.labels.compName')}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.TAX_ID}
                    label={getTextCommon('userInfo.labels.taxCode')}
                  >
                    <Input onKeyDown={onlyNumber} />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.COUNTRY}
                    label={getTextCommon('userInfo.labels.country')}
                  >
                    <Select />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.ADDRESS_1}
                    label={getTextCommon('userInfo.labels.address')}
                  >
                    <Input />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.CITY}
                    label={getTextCommon('userInfo.labels.province')}
                  >
                    <Select />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.STATE}
                    label={getTextCommon('userInfo.labels.district')}
                  >
                    <Select />
                  </Item>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <p className="title">
                {getTextCommon('userInfo.groups.accountSecurity')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.NEW_PASS}
                    label={getTextCommon('userInfo.labels.password')}
                    rules={[
                      { required: true },
                      {
                        pattern: REGEX_PASSWORD,
                      },
                    ]}
                  >
                    <PasswordMeterInput />
                  </Item>
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.RE_PASS}
                    label={getTextCommon('userInfo.labels.repassword')}
                    rules={[
                      { required: true },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue(CONTACT_LIST_FORM_FIELDS.NEW_PASS) ===
                              value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(getTextCommon('error.passwordNotMatch')), // TODO: update translation
                          );
                        },
                      }),
                    ]}
                  >
                    <Input type="password" />
                  </Item>
                </Col>
              </Row>
            </div>
            <Row gutter={16}>
              <Col sm={12} md={6} lg={3} xl={3}>
                <Item>
                  <Button type="primary" htmlType="submit" block>
                    {getTextCommon('action.save')}
                  </Button>
                </Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactList;
