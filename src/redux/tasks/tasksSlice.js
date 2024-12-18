import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from '../board/boardOperations';
import { addTask, deleteTask, updateTask } from './tasksOperations';
import { logOutThunk } from '../auth/authOperations';

const initialState = {
  tasks: [],
  currentTask: null,
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCurrentTask(state, action) {
      state.currentTask = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.tasks =
          action.payload.columns?.flatMap(column =>
            column.tasks.map(task => task)
          ) || [];
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          task => task._id !== action.payload.id
        );
        state.currentTask = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.tasks = state.tasks.map(task =>
          task._id === updatedTask._id ? updatedTask : task
        );
      })
      .addMatcher(
        isAnyOf(addTask.pending, deleteTask.pending, updateTask.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(addTask.rejected, deleteTask.rejected, updateTask.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(addTask.fulfilled, deleteTask.fulfilled, updateTask.fulfilled),
        handleFulFilled
      );
  },
});

export const { setCurrentTask } = slice.actions;
export const tasksReducer = slice.reducer;
