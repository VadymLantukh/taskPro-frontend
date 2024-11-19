import { createSlice } from '@reduxjs/toolkit';
import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from './boardOperations';
import { addColumn, deleteColumn } from '../columns/columnsOperations';

const initialState = {
  board: {
    id: null,
    title: null,
    backgroundImage: null,
    icon: null,
    columnIds: [],
  },
  currentBoard: null,

  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setCurrentBoard: (state, action) => {
      state.board = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.board = {
          id: action.payload._id,
          title: action.payload.title,
          backgroundImage: action.payload.backgroundImage,
          icon: action.payload.icon,
          columns: action.payload.columns.map(column => column._id),
        };
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.board.columnIds.push(action.payload._id);
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.board.columnIds = state.board.columnIds.filter(
          id => id !== action.payload.id
        );
      })
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulFilled);
  },
});

export const { setCurrentBoard } = slice.actions;
export const boardReducer = slice.reducer;
