import { createSlice } from '@reduxjs/toolkit';
import { sendEmail } from './emailsOperations';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {
    clearStatus: state => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendEmail.pending, state => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.error = null;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { clearStatus } = emailSlice.actions;
export const emailReducer = emailSlice.reducer;
