import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoard = createAsyncThunk(
  'boards/fetchBoard',
  async ({ id, priority }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/boards/${id}`, {
        params: { priority },
      });

      return data.data;
    } catch (error) {
      //    toast.error(
      //     'Unable to load this board at the moment. Please try again later.'
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post('/boards', board);
      return data.data;
    } catch (error) {
      //   toast.error(
      //     'There was an issue adding your board. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/boards/${id}`);
      return id;
    } catch (error) {
      //   toast.error(
      //     'Failed to delete the board. Please refresh the page and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/boards/${id}`, data);
      return response.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
