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
import { LAYOUT_8_16 } from 'constants/form';
import { createTranslatedText } from 'utils/text';
import illustration from 'assets/images/illustration.svg';

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
    const values = form.getFieldsValue();
    dispatch(registerActions.signup(values));
  }, [dispatch, form]);

  const onConfirmPassword = useCallback(() => {
    // Confirm password
  }, []);

  const onTypeChange = useCallback((value) => {
    setCurType(value);
  }, []);

  const onChangeStep = (current) => {
    setCurStep(current);
  };

  return (
    <div className="register__background">
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
        >
          <h1 className="register__title">{getText('title')}</h1>
          <Steps
            type="navigation"
            current={curStep}
            onChange={onChangeStep}
            className="site-navigation-steps"
          >
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
              onConfirmPassword,
            })}
          </div>
          <div className="register__button-wrapper">
            {curStep > 0 && (
              <Button onClick={() => setCurStep(curStep - 1)}>
                {getText('buttons.prev')}
              </Button>
            )}
            {curStep < steps.length - 1 && (
              <Button type="primary" onClick={() => setCurStep(curStep + 1)}>
                {getText('buttons.next')}
              </Button>
            )}
            {curStep === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                className="register__button"
              >
                {getText('buttons.register')}
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
