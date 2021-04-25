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

import { HOSTING_INDEX } from './constant';

// import { hostingData } from './mockData';

import Tabs from 'components/BasicComponent/Tabs';
import { useInjectReducer, useInjectSaga } from 'hooks/useInjector';

const { TabPane } = Tabs;

const HostingPage = () => {
  useInjectReducer({ key: serviceSliceName, reducer: serviceReducer });
  useInjectSaga({ key: serviceSliceName, saga: serviceSaga });
  const dispatch = useDispatch();

  const hostingTabs = useSelector(
    (state) =>
      get(
        state,
        [serviceSliceName, 'categories', HOSTING_INDEX, 'subcategories'],
        [],
      ),
    shallowEqual,
  );

  const products = useSelector(
    (state) =>
      get(state, [serviceSliceName, 'products'], initialState.products),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(serviceActions.fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (hostingTabs.length > 0) {
      const tabId = hostingTabs[0].id;
      dispatch(serviceActions.fetchProductsByCategory(tabId));
    }
  }, [dispatch, hostingTabs]);

  const onChangeTab = useCallback(
    (tabId) => {
      dispatch(serviceActions.fetchProductsByCategory(tabId));
    },
    [dispatch],
  );

  return (
    <div>
      <Tabs
        onChange={onChangeTab}
        defaultActiveKey={hostingTabs.length > 0 ? hostingTabs[0].id : ''}
      >
        {hostingTabs.map((tab) => (
          <TabPane tab={tab.name} key={tab.id}>
            {/* TODO: update later */}
            <TabDetail tabId={tab.id} tabName={tab.name} products={products} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HostingPage;
