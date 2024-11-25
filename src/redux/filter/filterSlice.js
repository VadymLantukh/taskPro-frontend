import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterType: 'All',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { setFilterType } = slice.actions;
export const filterReducer = slice.reducer;
