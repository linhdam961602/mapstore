import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { CONTACT_LIST_FORM_FIELDS, INITIAL_VALUES } from './constants';
import { contactActions, contactSaga, contactSliceName } from './slices';

import * as contactSelector from './selector';

import { REGEX_EMAIL } from 'constants/common';
import { ADD_NEW_CONTACT, TYPES_OF_SUBJECT } from 'constants/options';
import { VALIDATION_MESSAGES } from 'constants/form';
import { onlyNumber, convertDate, getPhoneWithoutCode } from 'utils';
import { createTranslatedText } from 'utils/text';
import Button from 'components/BasicComponent/Button';
import Select from 'components/BasicComponent/Select';
import DatePicker from 'components/BasicComponent/DatePicker';
import Input from 'components/BasicComponent/Input';
import Form from 'components/BasicComponent/Form';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import SidebarRight from 'containers/Sidebar/SidebarRight';
import PhoneInput from 'containers/PhoneInputContainer';
import AddressInput from 'containers/AddressInputContainer';

import { useInjectSaga } from 'hooks/useInjector';
import 'styles/common.scss';

const { Item } = Form;

const ContactList = () => {
  useInjectSaga({ key: contactSliceName, saga: contactSaga });

  const intl = useIntl();
  const [form] = Form.useForm();
  const optionAddNewContact = useMemo(() => ADD_NEW_CONTACT(intl), [intl]);
  const typeOfSubjIntl = useMemo(() => TYPES_OF_SUBJECT(intl), [intl]);
  const [isDisabled, setDisabled] = useState(true);
  const [curCountry, setCurCountry] = useState(null);
  const [curProvince, setCurProvince] = useState(null);
  const getTextCommon = createTranslatedText('common', intl);
  const dispatch = useDispatch();

  const listContactDropdown = useSelector(
    contactSelector.selectListContactDropdown,
  );
  const contactDetail = useSelector(contactSelector.selectContactDetail);
  const isNew = listContactDropdown.some((item) => item.value === 'add');

  if (!isNew || listContactDropdown.lenght === 0) {
    listContactDropdown.push(optionAddNewContact);
  }

  useEffect(() => {
    dispatch(contactActions.getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (contactDetail) {
      const convertContactDetail = {
        ...contactDetail,
        [CONTACT_LIST_FORM_FIELDS.CONTACT_ID]: listContactDropdown[0]?.value,
        [CONTACT_LIST_FORM_FIELDS.PHONE]: getPhoneWithoutCode(
          contactDetail[CONTACT_LIST_FORM_FIELDS.PHONE],
        ),
      };

      form.setFieldsValue(convertContactDetail);
    }
  }, [form, contactDetail, listContactDropdown]);

  const convertPostData = useCallback((data) => {
    const cData = {
      ...data,
      [CONTACT_LIST_FORM_FIELDS.PHONE]: `${
        data[CONTACT_LIST_FORM_FIELDS.CALLING_CODE]
      } ${data[CONTACT_LIST_FORM_FIELDS.PHONE]}`,
      [CONTACT_LIST_FORM_FIELDS.BIRTHDAY]: convertDate(
        data[CONTACT_LIST_FORM_FIELDS.BIRTHDAY],
      ),
    };

    delete cData[CONTACT_LIST_FORM_FIELDS.CALLING_CODE];
    return cData;
  }, []);

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();
    if (values[CONTACT_LIST_FORM_FIELDS.CONTACT_ID] === 'add') {
      delete values[CONTACT_LIST_FORM_FIELDS.CONTACT_ID];
      dispatch(contactActions.addContactDetail(convertPostData(values)));
    } else {
      dispatch(contactActions.updateContactDetail(convertPostData(values)));
    }
    setDisabled(values[CONTACT_LIST_FORM_FIELDS.CONTACT_ID] !== 'add');
  }, [convertPostData, dispatch, form]);

  const onChangeContact = (value) => {
    setDisabled(value !== 'add');
    if (value !== 'add') {
      dispatch(contactActions.getContactDetail(value));
    } else {
      form.setFieldsValue(INITIAL_VALUES);
    }
  };

  const onCountryChange = useCallback(
    (value) => {
      setCurCountry(value);
      form.setFieldsValue({
        [CONTACT_LIST_FORM_FIELDS.CITY]: '',
        [CONTACT_LIST_FORM_FIELDS.STATE]: '',
        [CONTACT_LIST_FORM_FIELDS.ADDRESS_1]: '',
      });
    },
    [form],
  );

  const onProvinceChange = useCallback(
    (value) => {
      setCurProvince(value);
      // Clear current selected district
      form.setFieldsValue({
        [CONTACT_LIST_FORM_FIELDS.STATE]: '',
        [CONTACT_LIST_FORM_FIELDS.ADDRESS_1]: '',
      });
    },
    [form],
  );

  return (
    <div className="my-infor-page">
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <Form
            className="my-infor-page-content"
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
                    <Select
                      onChange={onChangeContact}
                      options={listContactDropdown}
                    />
                  </Item>
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <p className="title">
                {getTextCommon('userInfo.groups.contactDetail')}
              </p>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.TYPE}
                    label={getTextCommon('userInfo.labels.typeOfSubj')}
                  >
                    <Select
                      options={Object.values(typeOfSubjIntl)}
                      disabled={isDisabled}
                    />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.LAST_NAME}
                    label={getTextCommon('userInfo.labels.lastName')}
                    rules={[{ required: true }]}
                  >
                    <Input disabled={isDisabled} />
                  </Item>
                  <Item name={CONTACT_LIST_FORM_FIELDS.POSTCODE} hidden>
                    <Input />
                  </Item>
                  <Item name={CONTACT_LIST_FORM_FIELDS.ID} hidden>
                    <Input />
                  </Item>
                  <Item name={CONTACT_LIST_FORM_FIELDS.NATIONAL_ID} hidden>
                    <Input />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.FIRST_NAME}
                    label={getTextCommon('userInfo.labels.firstName')}
                    rules={[{ required: true }]}
                  >
                    <Input disabled={isDisabled} />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.BIRTHDAY}
                    label={getTextCommon('userInfo.labels.birthday')}
                    rules={[{ required: true }]}
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
                      disabled={isDisabled}
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
                    <Input disabled={isDisabled} />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.COMPANY_NAME}
                    label={getTextCommon('userInfo.labels.compName')}
                  >
                    <Input disabled={isDisabled} />
                  </Item>
                </Col>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Item
                    name={CONTACT_LIST_FORM_FIELDS.TAX_ID}
                    label={getTextCommon('userInfo.labels.taxCode')}
                  >
                    <Input disabled={isDisabled} onKeyDown={onlyNumber} />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <AddressInput
                  defaultCountry={curCountry}
                  defaultProvince={curProvince}
                  renderCountryWrapper={(children) => (
                    <Col sm={24} md={12} lg={12} xl={12}>
                      <Item
                        name={CONTACT_LIST_FORM_FIELDS.COUNTRY}
                        label={getTextCommon('userInfo.labels.country')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  onCountryChange={onCountryChange}
                  renderProvinceWrapper={(children) => (
                    <Col sm={24} md={12} lg={12} xl={12}>
                      <Item
                        name={CONTACT_LIST_FORM_FIELDS.CITY}
                        label={getTextCommon('userInfo.labels.province')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  onProvinceChange={onProvinceChange}
                  renderDistrictWrapper={(children) => (
                    <Col sm={24} md={12} lg={12} xl={12}>
                      <Item
                        name={CONTACT_LIST_FORM_FIELDS.STATE}
                        label={getTextCommon('userInfo.labels.district')}
                      >
                        {children}
                      </Item>
                    </Col>
                  )}
                  renderAddressWrapper={(children) => (
                    <Col sm={24} md={12} lg={12} xl={12}>
                      <Item
                        name={CONTACT_LIST_FORM_FIELDS.ADDRESS_1}
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

export default ContactList;
