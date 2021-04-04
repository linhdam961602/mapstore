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
import './styles.scss';

import Input from 'components/BasicComponent/Input';
import { useInjectSaga, useInjectReducer } from 'hooks/useInjector';
import Select from 'components/BasicComponent/Select';

const FlagIcon = ({ flag, name }) => (
  <img src={flag} alt={name} className="flag" />
);

const PhoneInput = ({
  className,
  countryCode = '+84',
  onChangeCountry,
  disabledDropdown,
  ...props
}) => {
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
        <Select.Option
          key={name}
          value={`+${callingCodes}`}
          label={
            <span>
              <FlagIcon flag={flag} name={name} />
              {`+${callingCodes}`}
            </span>
          }
        >
          <div>
            <span role="img" aria-label={name}>
              <FlagIcon flag={flag} name={name} />
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
      <Select
        optionLabelProp="label"
        showArrow={false}
        dropdownClassName="phone-input__dropdown"
        onChange={onChangeCountry}
        defaultValue={countryCode}
        className="phone-input__select"
        disabled={disabledDropdown}
      >
        {renderOptions()}
      </Select>
      <Input {...props} className="phone-input" />
    </Input.Group>
  );
};

export default PhoneInput;
