import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { showToast } from '../toastHelper';

export const fetchBoard = createAsyncThunk(
  'boards/fetchBoard',
  async ({ id, priority }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/boards/${id}`, {
        params: { priority },
      });

      return data.data;
    } catch (error) {
      showToast(
        'Unable to load this board at the moment. Please try again later.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post('/boards', board);
      showToast(
        'Board added successfully! You can start organizing your tasks now.',
        'success'
      );
      return data.data;
    } catch (error) {
      showToast(
        'There was an issue adding your board. Please check the details and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/boards/${id}`);
      showToast('Board deleted successfully!', 'success');
      return id;
    } catch (error) {
      showToast(
        'Failed to delete the board. Please refresh the page and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/boards/${id}`, data);
      showToast(
        'Board updated successfully! Your changes have been saved.',
        'success'
      );
      return response.data.data.data;
    } catch (error) {
      showToast(
        'Failed to update the board. Please check your changes and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
