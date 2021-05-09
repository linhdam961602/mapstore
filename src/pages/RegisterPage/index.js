/* eslint-disable react/display-name */
/**
 *
 * Register Page
 *
 * This is the Register page.
 */
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import omit from 'lodash/omit';

import {
  REGISTER_FORM_FIELDS,
  INITIAL_VALUES,
  EXCLUDED_REGISTER_FORM_FIELDS,
} from './constants';
import './styles.scss';
import {
  registerSliceName,
  registerReducer,
  registerSaga,
  registerActions,
} from './slices';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import Form from 'components/BasicComponent/Form';
import Steps from 'components/BasicComponent/Steps';
import Button from 'components/BasicComponent/Button';
import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';
import { LAYOUT_8_16, VALIDATION_MESSAGES } from 'constants/form';
import { createTranslatedText } from 'utils/text';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import { LOGIN_URL } from 'constants/routes';
import FluidLayout from 'components/LayoutComponent/FluidLayout';

const { Step } = Steps;

const steps = [
  {
    key: 0,
    contentRender: (props) => <Step1 {...props} />,
  },
  {
    key: 1,
    contentRender: (props) => <Step2 {...props} />,
  },
  {
    key: 2,
    contentRender: (props) => <Step3 {...props} />,
  },
];

const RegisterPage = () => {
  useInjectReducer({ key: registerSliceName, reducer: registerReducer });
  useInjectSaga({ key: registerSliceName, saga: registerSaga });

  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getTextRegistration = createTranslatedText('registration', intl);
  const getTextCommon = createTranslatedText('common', intl);

  const [curType, setCurType] = useState(null);
  const [curStep, setCurStep] = useState(0);

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue(true); // Get all fields
    values.phonenumber = `${values[REGISTER_FORM_FIELDS.CALLING_CODE]} ${
      values[REGISTER_FORM_FIELDS.PHONE]
    }`;
    // exclude unused fields
    const validFields = omit(values, EXCLUDED_REGISTER_FORM_FIELDS);

    dispatch(registerActions.signup(validFields));
  }, [dispatch, form]);

  const onTypeChange = useCallback(
    (value) => {
      setCurType(value);
      // Clear company's fields
      form.setFieldsValue({
        [REGISTER_FORM_FIELDS.COMPANY_NAME]: '',
        [REGISTER_FORM_FIELDS.TAX_ID]: '',
      });
    },
    [form],
  );

  const onGoPrev = useCallback(() => {
    setCurStep(curStep - 1);
  }, [curStep]);

  const onGoNext = useCallback(async () => {
    // Validate
    await form.validateFields();
    setCurStep(curStep + 1);
  }, [curStep, form]);

  return (
    <FluidLayout>
      <Form
        className="register__form"
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
        form={form}
        {...LAYOUT_8_16}
        labelAlign="left"
        validateMessages={VALIDATION_MESSAGES}
      >
        <h1 className="register__title">{getTextRegistration('title')}</h1>
        <Steps current={curStep} className="site-navigation-steps">
          {steps.map((item) => (
            <Step key={item.key} disabled />
          ))}
        </Steps>
        <div className="register__steps-content">
          {steps[curStep].contentRender({
            form,
            getTextCommon,
            getTextRegistration,
            curType,
            onTypeChange,
          })}
        </div>

        <Row gutter={16}>
          <Col xl={12} xs={24}>
            <div className="register__button-wrapper">
              {curStep > 0 && (
                <Button onClick={onGoPrev}>
                  {getTextCommon('action.prev')}
                </Button>
              )}
              {curStep < steps.length - 1 && (
                <Button type="primary" onClick={onGoNext}>
                  {getTextCommon('action.next')}
                </Button>
              )}
              {curStep === steps.length - 1 && (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="register__button"
                  // disabled={!curCaptcha}
                >
                  {getTextCommon('action.register')}
                </Button>
              )}
            </div>
          </Col>
          <Col xl={12} xs={24} className="register__link">
            <span>{getTextCommon('userInfo.labels.alreadyHaveAcc')}</span>
            <Link to={LOGIN_URL}>{getTextCommon('action.login')}</Link>
          </Col>
        </Row>
      </Form>
    </FluidLayout>
  );
};
export default RegisterPage;
