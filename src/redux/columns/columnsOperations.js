import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showToast } from '../toastHelper';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const { data } = await axios.post('/columns', { boardId, title });
      showToast('Column added successfully!', 'success');
      return data.data;
    } catch (error) {
      showToast(
        'There was an issue adding your column. Please check the details and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'column/deleteColumn',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/columns/${id}`);
      showToast('Column deleted successfully!', 'success');
      return id;
    } catch (error) {
      showToast(
        'Failed to delete the column. Please refresh the page and try again.',
        'error'
      );
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
      showToast('Column updated successfully!', 'success');
      return data.data;
    } catch (error) {
      showToast(
        'Failed to update the column. Please check your changes and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
