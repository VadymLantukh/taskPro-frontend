import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { showToast } from '../toastHelper';

export const addTask = createAsyncThunk(
  'tasks/addTasks',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', task);
      showToast('Task added successfully!', 'success');
      return data.data;
    } catch (error) {
      showToast(
        'There was an issue adding your task. Please check the details and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async ({ id, columnId }, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${id}`);
      showToast('Task deleted successfully!', 'success');
      return { id, columnId };
    } catch (error) {
      showToast(
        'Failed to delete the task. Please refresh the page and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ task, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/tasks/${id}`, task);
      showToast('Task updated successfully!', 'success');
      return data.data.data;
    } catch (error) {
      showToast(
        'Unable to update the task. Please check the details and try again.',
        'error'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
