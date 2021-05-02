import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { CHANGE_PASS_FORM_FIELDS, INITIAL_VALUES } from './constants';

import {
  resetPasswordActions,
  resetPasswordSaga,
  resetPasswordSliceName,
} from './slices';

import { REGEX_PASSWORD } from 'constants/common';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Button from 'components/BasicComponent/Button';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import { createTranslatedText } from 'utils/text';
import { VALIDATION_MESSAGES } from 'constants/form';
import { useInjectSaga } from 'hooks/useInjector';

import PasswordMeterInput from 'components/BasicComponent/PasswordMeterInput';

import SidebarRight from 'containers/Sidebar/SidebarRight';
import './styles.scss';

const { Item } = Form;

const ChangePass = () => {
  const intl = useIntl();
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);
  const getTextChangePass = createTranslatedText('mypage.changePass', intl);
  const getTextCommon = createTranslatedText('common', intl);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useInjectSaga({ key: resetPasswordSliceName, saga: resetPasswordSaga });

  const onFinish = useCallback(() => {
    const values = form.getFieldsValue();

    dispatch(resetPasswordActions.resetPassword(values));
  }, [dispatch, form]);

  return (
    <div className="mypage">
      <h1 className="titlePage">{getTextSideBarRight('changePass')}</h1>
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
              <Row gutter={16}>
                <Col sm={24} md={24} lg={8} xl={8}>
                  <Item
                    name={CHANGE_PASS_FORM_FIELDS.OLD_PASS}
                    label={getTextChangePass('labels.oldPassword')}
                    rules={[{ required: true }]}
                  >
                    <Input type="password" />
                  </Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={24} lg={8} xl={8}>
                  <Item
                    name={CHANGE_PASS_FORM_FIELDS.NEW_PASS}
                    label={getTextChangePass('labels.newPassword')}
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
              </Row>
              <Row gutter={16}>
                <Col sm={24} md={24} lg={8} xl={8}>
                  <Item
                    name={CHANGE_PASS_FORM_FIELDS.RE_PASS}
                    label={getTextChangePass('labels.rePassword')}
                    rules={[
                      { required: true },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue(CHANGE_PASS_FORM_FIELDS.NEW_PASS) ===
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

export default ChangePass;
