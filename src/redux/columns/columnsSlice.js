import { createSlice } from '@reduxjs/toolkit';
import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from '../board/boardOperations';
import { addColumn, deleteColumn, updateColumn } from './columnsOperations';

const initialState = {
  columns: [],
  currentColumn: null,
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
  extraReducers: builder => {
    builder
      // .addCase(fetchBoard.fulfilled, (state, action) => {
      //   state.columns = action.payload.columns;
      // })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.columns = action.payload.columns?.map(
          ({ _id, tasks, ...rest }) => ({
            ...rest,
            id: _id,
            tasksIds: tasks.map(task => task._id) || [],
          })
        );
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.push(action.payload);
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(
          column => column._id !== action.payload
        );
        state.currentColumn = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.columns = state.columns.map(column =>
          column._id === action.payload._id ? action.payload : column
        );
      })
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulFilled);
  },
});

export const { setCurrentColumn } = slice.actions;
export const columnsReducer = slice.reducer;
