import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { USER_INFORMATION_FORM_FIELDS, INITIAL_VALUES } from './constants';

import * as authSelector from 'pages/LoginPage/selector';
import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import DatePicker from 'components/BasicComponent/DatePicker';
import Select from 'components/BasicComponent/Select';
import Button from 'components/BasicComponent/Button';

import { onlyNumber, getPhoneWithoutCode } from 'utils';
import { createTranslatedText } from 'utils/text';
import { REGEX_EMAIL } from 'constants/common';
import { VALIDATION_MESSAGES } from 'constants/form';

import './styles.scss';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import SidebarRight from 'containers/Sidebar/SidebarRight';
import PhoneInput from 'containers/PhoneInputContainer';

const { Item } = Form;

const PersonalInfomation = () => {
  const intl = useIntl();
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);
  const getTextPersionalInfo = createTranslatedText(
    'mypage.myInformation',
    intl,
  );
  const getTextCommon = createTranslatedText('common', intl);
  const [form] = Form.useForm();

  const userInfo = useSelector(authSelector.selectUserInfo);

  useEffect(() => {
    if (userInfo) {
      const convertUserInfo = { ...userInfo };
      convertUserInfo.phonenumber = getPhoneWithoutCode(
        convertUserInfo.phonenumber,
      );
      form.setFieldsValue(convertUserInfo);
    }
  }, [form, userInfo]);

  const onFinish = () => {
    // TODO: Call API update user info.
  };

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
              <p className="title">{getTextPersionalInfo('personalInfo')}</p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.LAST_NAME}
                    label={getTextPersionalInfo('labels.lastName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.FIRST_NAME}
                    label={getTextPersionalInfo('labels.firstName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.BIRTHDAY}
                    label={getTextPersionalInfo('labels.birthday')}
                  >
                    <DatePicker />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item name={USER_INFORMATION_FORM_FIELDS.CALLING_CODE} hidden>
                    <Input />
                  </Item>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.PHONE}
                    label={getTextPersionalInfo('labels.phone')}
                    rules={[{ required: true }]}
                  >
                    <PhoneInput
                      disabledDropdown
                      className="register__phone-input"
                      countryCode={form.getFieldValue(
                        USER_INFORMATION_FORM_FIELDS.CALLING_CODE,
                      )}
                      onChangeCountry={(value) => {
                        form.setFieldsValue({
                          [USER_INFORMATION_FORM_FIELDS.CALLING_CODE]: value,
                        });
                      }}
                    />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.EMAIL}
                    label={getTextPersionalInfo('labels.email')}
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
            </div>
            <div className="form-group">
              <p className="title">{getTextPersionalInfo('paymentAddress')}</p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.COMPANY_NAME}
                    label={getTextPersionalInfo('labels.compName')}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.TAX_ID}
                    label={getTextPersionalInfo('labels.taxCode')}
                  >
                    <Input onKeyDown={onlyNumber} />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.COUNTRY}
                    label={getTextPersionalInfo('labels.country')}
                  >
                    <Select />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.ADDRESS_1}
                    label={getTextPersionalInfo('labels.address')}
                  >
                    <Input />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.CITY}
                    label={getTextPersionalInfo('labels.province')}
                  >
                    <Select />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.STATE}
                    label={getTextPersionalInfo('labels.district')}
                  >
                    <Select />
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

export default PersonalInfomation;
