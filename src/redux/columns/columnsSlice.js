import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columnsById: {},
  columnsIds: [],
  currentColumn: {},
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setCurrentColumn(state, action) {
      state.currentColumn = action.payload;
    },
  },
});

export const { setCurrentColumn } = slice.actions;
export const columnsReducer = slice.reducer;
