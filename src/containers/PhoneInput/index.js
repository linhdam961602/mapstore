import React, { useEffect } from 'react';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  countryReducer,
  countrySaga,
  countrySliceName,
  countryActions,
  initialState,
} from './slices';

import Input from 'components/BasicComponent/Input';
import { useInjectSaga, useInjectReducer } from 'hooks/useInjector';
import Select from 'components/BasicComponent/Select';

const PhoneInput = ({ className, ...props }) => {
  useInjectReducer({ key: countrySliceName, reducer: countryReducer });
  useInjectSaga({ key: countrySliceName, saga: countrySaga });
  const dispatch = useDispatch();

  const classes = classNames({
    [className]: className || '',
  });

  const countryList = useSelector(
    (state) =>
      get(state, [countrySliceName, 'countryList'], initialState.countryList),
    shallowEqual,
  );

  const renderOptions = () =>
    countryList &&
    countryList.map((country) => {
      const { name, nativeName, callingCodes, flag } = country;

      return (
        <Select.Option key={name} value={name} label={`+${callingCodes}`}>
          <div>
            <span role="img" aria-label={name}>
              <img src={flag} alt={name} style={{ width: '2rem' }} />
            </span>
            <span>
              {name} ({nativeName})
            </span>
            <span>+{callingCodes}</span>
          </div>
        </Select.Option>
      );
    });

  useEffect(() => {
    dispatch(countryActions.fetchCountries());
  }, [dispatch]);

  return (
    <Input.Group compact className={classes}>
      <Select style={{ width: '30%' }} optionLabelProp="label">
        {renderOptions()}
      </Select>
      <Input style={{ width: '70%' }} {...props} />
    </Input.Group>
  );
};

export default PhoneInput;
