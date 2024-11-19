import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// у діспатч функції потрібно передати id дошки

export const fetchBoard = createAsyncThunk(
  'boards/fetchBoard',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/boards/${id}`);

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
  },
  {
    condition: (_, thunkAPI) => {
      const isLoading = thunkAPI.getState().board.isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ title, backgroundImage, icon, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/boards/${id}`, {
        title,
        backgroundImage,
        icon,
      });
      return data.data;
    } catch (error) {
      //   toast.error(
      //     'Unable to update the board. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
