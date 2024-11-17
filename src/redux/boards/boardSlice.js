import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  activeBoard: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setActiveBoard: (state, action) => {
      state.activeBoard = action.payload;
    },
  },
});

export const boardsReducer = slice.reducer;
export const { setActiveBoard } = slice.actions;
