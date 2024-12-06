import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from '../board/boardOperations';
import { addColumn, deleteColumn, updateColumn } from './columnsOperations';
import { addTask, deleteTask, updateTask } from '../tasks/tasksOperations';
import { logOutThunk } from '../auth/authOperations';

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
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.columns = action.payload.columns?.map(({ tasks, ...rest }) => ({
          ...rest,
          tasksIds: tasks ? tasks.map(task => task._id) : [],
        }));
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        const { tasks, ...rest } = action.payload;
        state.columns.push({
          ...rest,
          tasksIds: tasks ? tasks.map(task => task._id) : [],
        });
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = state.columns.filter(
          column => column._id !== action.payload
        );
        state.currentColumn = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.columns = state.columns.map(column =>
          column._id === action.payload._id
            ? { ...action.payload, tasksIds: [...column.tasksIds] }
            : column
        );
      })
      .addCase(addTask.fulfilled, (state, action) => {
        const column = state.columns.find(
          col => col._id === action.payload.columnId
        );

        if (column) {
          column.tasksIds.push(action.payload._id);
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const columnIndex = state.columns.findIndex(
          col => col._id === action.payload.columnId
        );
        if (columnIndex !== -1) {
          state.columns[columnIndex].tasksIds = state.columns[
            columnIndex
          ].tasksIds.filter(taskId => taskId !== action.payload.id);
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const { _id: taskId, columnId: newColumnId } = action.payload;

        const oldColumn = state.columns.find(col =>
          col.tasksIds.includes(taskId)
        );

        const newColumn = state.columns.find(col => col._id === newColumnId);

        if (oldColumn) {
          oldColumn.tasksIds = oldColumn.tasksIds.filter(id => id !== taskId);
        }
        if (newColumn) {
          newColumn.tasksIds.push(taskId);
        }
      })
      .addMatcher(
        isAnyOf(
          fetchBoard.pending,
          addColumn.pending,
          deleteColumn.pending,
          updateColumn.pending,
          addTask.pending,
          deleteTask.pending,
          updateTask.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchBoard.rejected,
          addColumn.rejected,
          deleteColumn.rejected,
          updateColumn.rejected,
          addTask.rejected,
          deleteTask.rejected,
          updateTask.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchBoard.fulfilled,
          addColumn.fulfilled,
          deleteColumn.fulfilled,
          updateColumn.fulfilled,
          addTask.fulfilled,
          deleteTask.fulfilled,
          updateTask.fulfilled
        ),
        handleFulFilled
      );
  },
});

export const { setCurrentColumn } = slice.actions;
export const columnsReducer = slice.reducer;
