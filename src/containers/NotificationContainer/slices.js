/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const notificationSliceName = 'notifications';

export const initialState = {
  currentNotification: {},
};

const notificationSlice = createSlice({
  name: notificationSliceName,
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.currentNotification = action.payload;
    },
    removeNotification: () => initialState,
  },
});

export const {
  actions: notificationActions,
  reducer: notificationReducer,
} = notificationSlice;
