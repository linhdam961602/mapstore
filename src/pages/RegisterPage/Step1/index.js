import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { REGISTER_FORM_FIELDS } from '../constants';

import Form from 'components/BasicComponent/Form';
import Input from 'components/BasicComponent/Input';
import Select from 'components/BasicComponent/Select';
import Grid from 'components/BasicComponent/Grid';
import { TYPES_OF_SUBJECT } from 'constants/options';
import { onlyNumber } from 'utils';

const { Row, Col } = Grid;

const Step1 = ({ curType, getTextCommon, onTypeChange }) => {
  const intl = useIntl();
  const typeOfSubjIntl = useMemo(() => TYPES_OF_SUBJECT(intl), [intl]);

  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name={REGISTER_FORM_FIELDS.TYPE}
            label={getTextCommon('userInfo.labels.typeOfSubj')}
          >
            <Select
              options={Object.values(typeOfSubjIntl)}
              onChange={onTypeChange}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Company Information */}
      {curType === typeOfSubjIntl.COMPANY.value && (
        <div>
          <h3 className="register__form-section--title">
            {getTextCommon('headings.compInfo')}
          </h3>
          <Row gutter={16}>
            <Col xl={24} lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.COMPANY_NAME}
                label={getTextCommon('userInfo.labels.compName')}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={24} lg={12} xs={24}>
              <Form.Item
                name={REGISTER_FORM_FIELDS.TAX_ID}
                label={getTextCommon('userInfo.labels.taxCode')}
              >
                <Input onKeyDown={onlyNumber} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Step1;
