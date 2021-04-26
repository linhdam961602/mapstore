import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { USER_INFORMATION_FORM_FIELDS, INITIAL_VALUES } from './constants';
import { clientActions, clientSaga, clientSliceName } from './slices';

import * as authSelector from 'pages/LoginPage/selector';
import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import DatePicker from 'components/BasicComponent/DatePicker';
import Select from 'components/BasicComponent/Select';
import Button from 'components/BasicComponent/Button';

import { onlyNumber, getPhoneWithoutCode, convertDate } from 'utils';
import { createTranslatedText } from 'utils/text';
import { REGEX_EMAIL } from 'constants/common';
import { VALIDATION_MESSAGES } from 'constants/form';
import { useInjectSaga } from 'hooks/useInjector';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import SidebarRight from 'containers/Sidebar/SidebarRight';
import PhoneInput from 'containers/PhoneInputContainer';
import AddressInput from 'containers/AddressInputContainer';

import {
  TYPES_OF_SUBJECT,
  TYPE_PRIVATE,
  TYPE_COMPANY,
} from 'constants/options';

import './styles.scss';

const { Item } = Form;

const PersonalInfomation = () => {
  const intl = useIntl();
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);
  const getTextCommon = createTranslatedText('common', intl);
  const dispatch = useDispatch();
  const typeOfSubjIntl = useMemo(() => TYPES_OF_SUBJECT(intl), [intl]);
  const [form] = Form.useForm();

  const [curCountry, setCurCountry] = useState(null);
  const [curProvince, setCurProvince] = useState(null);

  useInjectSaga({ key: clientSliceName, saga: clientSaga });
  const userInfo = useSelector(authSelector.selectUserInfo);

  useEffect(() => {
    if (userInfo) {
      const convertUserInfo = {
        ...userInfo,
        [USER_INFORMATION_FORM_FIELDS.BIRTHDAY]: convertDate(
          userInfo[USER_INFORMATION_FORM_FIELDS.BIRTHDAY],
        ),
        [USER_INFORMATION_FORM_FIELDS.PHONE]: getPhoneWithoutCode(
          userInfo[USER_INFORMATION_FORM_FIELDS.PHONE],
        ),
        [USER_INFORMATION_FORM_FIELDS.TYPE]: userInfo.company
          ? TYPE_COMPANY
          : TYPE_PRIVATE,
      };

      form.setFieldsValue(convertUserInfo);

      setCurProvince(convertUserInfo[USER_INFORMATION_FORM_FIELDS.CITY]);
      setCurCountry(convertUserInfo[USER_INFORMATION_FORM_FIELDS.COUNTRY]);
    }
  }, [form, userInfo]);

  const convertPostData = useCallback((data) => {
    const cData = {
      ...data,
      [USER_INFORMATION_FORM_FIELDS.PHONE]: `${
        data[USER_INFORMATION_FORM_FIELDS.CALLING_CODE]
      } ${data[USER_INFORMATION_FORM_FIELDS.PHONE]}`,
      [USER_INFORMATION_FORM_FIELDS.BIRTHDAY]: convertDate(
        data[USER_INFORMATION_FORM_FIELDS.BIRTHDAY],
      ),
      [USER_INFORMATION_FORM_FIELDS.NATIONAL_ID]: convertDate(
        data[USER_INFORMATION_FORM_FIELDS.COUNTRY],
      ),
    };

    delete cData[USER_INFORMATION_FORM_FIELDS.CALLING_CODE];
    return cData;
  }, []);

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();
    dispatch(clientActions.saveClientInformation(convertPostData(values)));
  }, [convertPostData, dispatch, form]);

  const onCountryChange = useCallback(
    (value) => {
      setCurCountry(value);
      form.setFieldsValue({
        [USER_INFORMATION_FORM_FIELDS.CITY]: '',
        [USER_INFORMATION_FORM_FIELDS.STATE]: '',
        [USER_INFORMATION_FORM_FIELDS.ADDRESS_1]: '',
      });
    },
    [form],
  );

  const onProvinceChange = useCallback(
    (value) => {
      setCurProvince(value);
      // Clear current selected district
      form.setFieldsValue({
        [USER_INFORMATION_FORM_FIELDS.STATE]: '',
        [USER_INFORMATION_FORM_FIELDS.ADDRESS_1]: '',
      });
    },
    [form],
  );

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
                {getTextCommon('userInfo.groups.personalInfo')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.TYPE}
                    label={getTextCommon('userInfo.labels.typeOfSubj')}
                  >
                    <Select options={Object.values(typeOfSubjIntl)} disabled />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.LAST_NAME}
                    label={getTextCommon('userInfo.labels.lastName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                  <Item name={USER_INFORMATION_FORM_FIELDS.POSTCODE} hidden>
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.FIRST_NAME}
                    label={getTextCommon('userInfo.labels.firstName')}
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.BIRTHDAY}
                    label={getTextCommon('userInfo.labels.birthday')}
                    rules={[{ required: true }]}
                  >
                    <DatePicker />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item name={USER_INFORMATION_FORM_FIELDS.CALLING_CODE} hidden>
                    <Input />
                  </Item>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.PHONE}
                    label={getTextCommon('userInfo.labels.phone')}
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
                <Col sm={24} md={12} lg={12} xl={8}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.EMAIL}
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
            </div>
            <div className="form-group">
              <p className="title">
                {getTextCommon('userInfo.groups.paymentAddress')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.COMPANY_NAME}
                    label={getTextCommon('userInfo.labels.compName')}
                  >
                    <Input />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={USER_INFORMATION_FORM_FIELDS.TAX_ID}
                    label={getTextCommon('userInfo.labels.taxCode')}
                  >
                    <Input onKeyDown={onlyNumber} />
                  </Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <AddressInput
                  defaultCountry={curCountry}
                  defaultProvince={curProvince}
                  renderCountryWrapper={(children) => (
                    <Col lg={12} xs={24}>
                      <Item
                        name={USER_INFORMATION_FORM_FIELDS.COUNTRY}
                        label={getTextCommon('userInfo.labels.country')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  onCountryChange={onCountryChange}
                  renderProvinceWrapper={(children) => (
                    <Col lg={12} xs={24}>
                      <Item
                        name={USER_INFORMATION_FORM_FIELDS.CITY}
                        label={getTextCommon('userInfo.labels.province')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  onProvinceChange={onProvinceChange}
                  renderDistrictWrapper={(children) => (
                    <Col lg={12} xs={24}>
                      <Item
                        name={USER_INFORMATION_FORM_FIELDS.STATE}
                        label={getTextCommon('userInfo.labels.district')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  renderAddressWrapper={(children) => (
                    <Col lg={12} xs={24}>
                      <Item
                        name={USER_INFORMATION_FORM_FIELDS.ADDRESS_1}
                        label={getTextCommon('userInfo.labels.address')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                />
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
