import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  serviceReducer,
  serviceSaga,
  serviceSliceName,
  serviceActions,
  initialState,
} from '../slices';
import TabDetail from '../components/TabDetail';

import { SSL_INDEX } from './constant';

import Tabs from 'components/BasicComponent/Tabs';
import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';
import Spinner from 'components/BasicComponent/Spinner';

const { TabPane } = Tabs;

const SSLPage = () => {
  useInjectReducer({ key: serviceSliceName, reducer: serviceReducer });
  useInjectSaga({ key: serviceSliceName, saga: serviceSaga });
  const dispatch = useDispatch();

  const sslTabs = useSelector(
    (state) =>
      get(
        state,
        [serviceSliceName, 'categories', SSL_INDEX, 'subcategories'],
        [],
      ),
    shallowEqual,
  );

  const products = useSelector(
    (state) =>
      get(state, [serviceSliceName, 'products'], initialState.products),
    shallowEqual,
  );

  const isLoadingTabs = useSelector((state) =>
    get(state, [serviceSliceName, 'isLoading'], initialState.isLoading),
  );

  useEffect(() => {
    dispatch(serviceActions.fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (sslTabs.length > 0) {
      const tabId = sslTabs[0].id;
      dispatch(serviceActions.fetchProductsByCategory(tabId));
    }
  }, [dispatch, sslTabs]);

  const onChangeTab = useCallback(
    (tabId) => {
      dispatch(serviceActions.fetchProductsByCategory(tabId));
    },
    [dispatch],
  );

  return (
    <Spinner spinning={isLoadingTabs}>
      <Tabs
        onChange={onChangeTab}
        defaultActiveKey={sslTabs.length > 0 ? sslTabs[0].id : ''}
      >
        {sslTabs.map((tab) => (
          <TabPane tab={tab.name} key={tab.id}>
            <TabDetail tabId={tab.id} tabName={tab.name} products={products} />
          </TabPane>
        ))}
      </Tabs>
    </Spinner>
  );
};

export default SSLPage;
