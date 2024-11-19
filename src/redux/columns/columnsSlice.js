import { createSlice } from '@reduxjs/toolkit';
import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from '../board/boardOperations';
import { addColumn, deleteColumn, updateColumn } from './columnsOperations';
import { addTask, deleteTask, updateTask } from '../tasks/tasksOperations';

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
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.columns = action.payload.columns?.map(({ tasks, ...rest }) => ({
          ...rest,
          tasksIds: tasks.map(task => task._id) || [],
        }));
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
        console.log(action.payload);

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
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulFilled);
  },
});

export const { setCurrentColumn } = slice.actions;
export const columnsReducer = slice.reducer;
