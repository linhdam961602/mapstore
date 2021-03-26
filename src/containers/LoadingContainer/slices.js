import { createSlice } from '@reduxjs/toolkit';

export const loadingSliceName = 'appLoading';

export const initialState = {
  isLoading: false,
};

const loadingSlide = createSlice({
  name: loadingSliceName,
  initialState,
  reducers: {
    showLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    stopLoading: () => initialState,
  },
});

export const {
  actions: loadingActions,
  reducer: loadingReducer,
} = loadingSlide;
