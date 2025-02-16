import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoadingReducer',
  initialState: { value: false },
  reducers: {
    changeIsLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeIsLoading } = isLoadingSlice.actions;
export default {
  isLoadingReducer: isLoadingSlice.reducer,
};
