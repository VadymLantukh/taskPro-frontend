import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTask = createAsyncThunk(
  'tasks/addTasks',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', task);
      return data.data;
    } catch (error) {
      //   toast.error(
      //     'There was an issue adding your task. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async ({ id, columnId }, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${id}`);
      return { id, columnId };
    } catch (error) {
      //   toast.error(
      //     'Failed to delete the task. Please refresh the page and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ task, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/tasks/${id}`, task);
      return data.data.data;
    } catch (error) {
      //   toast.error(
      //     'Unable to update the task. Please check the details and try again.',
      //   );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
