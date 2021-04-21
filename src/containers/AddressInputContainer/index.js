import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  addressReducer,
  addressSaga,
  addressSliceName,
  addressActions,
  initialState,
} from './slices';
import './styles.scss';

import Input from 'components/BasicComponent/Input';
import { useInjectSaga, useInjectReducer } from 'hooks/useInjector';
import Select from 'components/BasicComponent/Select';

import { VIETNAM } from 'pages/RegisterPage/constants';

const AddressInput = ({
  defaultCountry = VIETNAM,
  defaultProvince = null,
  renderCountryWrapper,
  renderProvinceWrapper,
  renderDistrictWrapper,
  renderAddressWrapper,
  onCountryChange = () => {},
  onProvinceChange = () => {},
}) => {
  useInjectReducer({ key: addressSliceName, reducer: addressReducer });
  useInjectSaga({ key: addressSliceName, saga: addressSaga });
  const dispatch = useDispatch();

  const [curCountry, setCurCountry] = useState(defaultCountry);
  const [curProvince, setCurProvince] = useState(defaultProvince);
  const [districtList, setDistrictList] = useState([]);

  useEffect(() => {
    setCurCountry(defaultCountry);
  }, [defaultCountry]);

  useEffect(() => {
    setCurProvince(defaultProvince);
  }, [defaultProvince]);

  const countryList = useSelector(
    (state) =>
      get(state, [addressSliceName, 'countryList'], initialState.countryList),
    shallowEqual,
  );

  const stateCityData = useSelector(
    (state) =>
      get(
        state,
        [addressSliceName, 'stateCityData'],
        initialState.stateCityData,
      ),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(addressActions.fetchCountries());
    dispatch(addressActions.fetchStateCity());
  }, [dispatch]);

  const $onCountryChange = useCallback(
    (value) => {
      onCountryChange(value);
      setCurCountry(value);
    },
    [onCountryChange],
  );

  const $onProvinceChange = useCallback(
    (value) => {
      onProvinceChange(value);
      setCurProvince(value);
      // Get District List
      const { districts } = stateCityData.find(
        (province) => province.name === value,
      );
      if (districts) {
        const convertedData = districts.map(({ name }) => ({
          value: name,
          label: name,
        }));
        setDistrictList(convertedData);
      }
    },
    [onProvinceChange, stateCityData],
  );

  useEffect(() => {
    if (!curProvince) {
      setDistrictList([]);
      return;
    }
    const data = stateCityData.find(
      (province) => province.name === curProvince,
    );

    if (data && data.districts) {
      const result = data.districts.map(({ name }) => ({
        value: name,
        label: name,
      }));
      setDistrictList(result);
    } else {
      setDistrictList([]);
    }
  }, [curProvince, stateCityData]);

  return (
    <>
      {renderCountryWrapper(
        <Select
          options={countryList.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          onChange={$onCountryChange}
        />,
      )}
      {renderProvinceWrapper(
        curCountry === VIETNAM ? (
          <Select
            options={stateCityData.map(({ name }) => ({
              value: name,
              label: name,
            }))}
            onChange={$onProvinceChange}
          />
        ) : (
          <Input />
        ),
      )}
      {renderDistrictWrapper(
        curCountry === VIETNAM ? <Select options={districtList} /> : <Input />,
      )}
      {renderAddressWrapper(<Input />)}
    </>
  );
};

export default AddressInput;
