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

import { INITIAL_VALUES } from './constants';
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
import illustration from 'assets/images/illustration.svg';
import logo from 'assets/logo/tino-logo.svg';
import LanguageSelector from 'containers/TopBar/LanguageSelector';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

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
  const getText = createTranslatedText('registration', intl);

  const [curType, setCurType] = useState(null);
  const [curStep, setCurStep] = useState(0);

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue(true); // Get all fields
    dispatch(registerActions.signup(values));
  }, [dispatch, form]);

  const onTypeChange = useCallback((value) => {
    setCurType(value);
  }, []);

  const onGoPrev = useCallback(() => {
    setCurStep(curStep - 1);
  }, [curStep]);

  const onGoNext = useCallback(async () => {
    // Validate
    if (curStep === 1) {
      await form.validateFields();
    }
    setCurStep(curStep + 1);
  }, [curStep, form]);

  return (
    <div className="register__background">
      <div className="register__language">
        <img className="logo" alt="logo" src={logo} />
        <LanguageSelector />
      </div>
      <div className="register__container">
        <div className="register__left-container">
          <img alt="Icewall Tailwind HTML Admin Template" src={illustration} />
        </div>
        <Form
          className="register__form"
          initialValues={INITIAL_VALUES}
          onFinish={onFinish}
          form={form}
          {...LAYOUT_8_16}
          labelAlign="left"
          validateMessages={VALIDATION_MESSAGES}
        >
          <h1 className="register__title">{getText('title')}</h1>
          <Steps current={curStep} className="site-navigation-steps">
            {steps.map((item) => (
              <Step key={item.key} disabled />
            ))}
          </Steps>
          <div className="register__steps-content">
            {steps[curStep].contentRender({
              form,
              getText,
              curType,
              onTypeChange,
            })}
          </div>

          <Row gutter={16}>
            <Col lg={12} xs={24}>
              <div className="register__button-wrapper">
                {curStep > 0 && (
                  <Button onClick={onGoPrev}>{getText('buttons.prev')}</Button>
                )}
                {curStep < steps.length - 1 && (
                  <Button type="primary" onClick={onGoNext}>
                    {getText('buttons.next')}
                  </Button>
                )}
                {curStep === steps.length - 1 && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="register__button"
                    // disabled={!curCaptcha}
                  >
                    {getText('buttons.register')}
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={12} xs={24}>
              Already have an account? Login
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
