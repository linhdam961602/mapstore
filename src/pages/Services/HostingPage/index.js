import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import {
  serviceReducer,
  serviceSaga,
  serviceSliceName,
  serviceActions,
} from '../slices';

import CloudHosting from './TabList/CloudHosting';

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
      get(state, [serviceSliceName, 'categories', 2, 'subcategories'], []),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(serviceActions.fetchCategory());
  }, [dispatch]);

  return (
    <div>
      <Tabs defaultActiveKey={hostingTabs.length > 0 ? hostingTabs[0].id : ''}>
        {hostingTabs.map((tab) => (
          <TabPane tab={tab.name} key={tab.id}>
            {/* TODO: update later */}
            <CloudHosting />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HostingPage;
