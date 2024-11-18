import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: {
    id: null,
    title: null,
    backgroundImage: null,
    icon: null,
    columnsIds: [],
  },
  setCurrentBoard: {},
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setCurrentBoard: (state, action) => {
      state.activeBoard = action.payload;
    },
  },
});

export const { setCurrentBoard } = slice.actions;
export const boardReducer = slice.reducer;
