import { createSlice } from '@reduxjs/toolkit';
import { handleFulFilled, handlePending, handleRejected } from '../handlers';
import { fetchBoard } from '../board/boardOperations';

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
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.tasks =
          action.payload.columns?.flatMap(column =>
            column.tasks.map(({ _id, ...rest }) => ({
              ...rest,
              id: _id,
            }))
          ) || [];
      })
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulFilled);
  },
});

export const { setCurrentTask } = slice.actions;
export const tasksReducer = slice.reducer;
