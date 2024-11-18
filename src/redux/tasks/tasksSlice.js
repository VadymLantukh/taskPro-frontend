import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksById: {},
  tasksIds: [],
  currentTask: {},
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
});

export const { setCurrentTask } = slice.actions;
export const tasksReducer = slice.reducer;
