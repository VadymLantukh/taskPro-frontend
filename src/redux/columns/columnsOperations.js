import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const { data } = await axios.post('/columns', { boardId, title });
      return data.data;
    } catch (error) {
      //   toast.error(
      //     'There was an issue adding your column. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/deleteColumn',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/columns/${id}`);
      return id;
    } catch (error) {
      //   toast.error(
      //     'Failed to delete the column. Please refresh the page and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ title, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/columns/${id}`, {
        title,
      });
      return data.data;
    } catch (error) {
      //   toast.error(
      //     'Unable to update the column. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
