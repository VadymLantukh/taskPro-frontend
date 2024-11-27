import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addColumn, deleteColumn } from '../columns/columnsOperations';
import { addBoard, fetchBoard, updateBoard } from './boardOperations';
import { logOutThunk } from '../auth/authOperations';
import { handlePending, handleRejected, handleFulFilled } from '../handlers';

const initialState = {
  board: {
    id: null,
    title: null,
    backgroundImage: null,
    icon: null,
    columns: [],
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
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(addBoard.fulfilled)
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.board = {
          id: action.payload._id,
          title: action.payload.title,
          backgroundImage: action.payload.backgroundImage,
          icon: action.payload.icon,
          columns: action.payload.columns?.map(column => column._id) || [],
        };
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.board = {
          ...state.board,
          title: action.payload.title,
          backgroundImage: action.payload.backgroundImage,
          icon: action.payload.icon,
        };
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.board.columns.push(action.payload._id);
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.board.columns = state.board.columns.filter(
          id => id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          addBoard.pending,
          fetchBoard.pending,
          updateBoard.pending,
          addColumn.pending,
          deleteColumn.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          addBoard.rejected,
          fetchBoard.rejected,
          updateBoard.rejected,
          addColumn.rejected,
          deleteColumn.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          addBoard.fulfilled,
          fetchBoard.fulfilled,
          updateBoard.fulfilled,
          addColumn.fulfilled,
          deleteColumn.fulfilled
        ),
        handleFulFilled
      );
  },
});

export const { setCurrentBoard } = slice.actions;
export const boardReducer = slice.reducer;
