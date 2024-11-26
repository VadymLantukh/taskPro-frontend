import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showToast } from '../toastHelper';

axios.defaults.baseURL = 'https://task-manager-0qvm.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.token);
      showToast(
        'You have successfully registered! You can now log in to your account.',
        'success'
      );
      return res.data;
    } catch (error) {
      const status = error.response?.status;
      switch (status) {
        case 409:
          showToast(
            'This email is already in use. Please use another one.',
            'error'
          );
          break;
        case 500:
          showToast('Server error. Please try again later.', 'error');
          break;
        default:
          showToast('Something went wrong!', 'error');
          break;
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.data.accessToken);
      return data.data;
    } catch (error) {
      const status = error.response?.status;
      switch (status) {
        case 401:
          showToast('Incorrect email or password. Please try again.', 'error');
          break;
        case 403:
          showToast(
            'Access forbidden. Please check your account permissions.',
            'error'
          );
          break;
        case 404:
          showToast('User not found. Please register first.', 'error');
          break;
        case 500:
          showToast('Server error. Please try again later.', 'error');
          break;
        default:
          showToast('Something went wrong!', 'error');
          break;
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/auth/logout');
      console.log('logout successfully'); //TODO remove this
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'auth/profile',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.patch('/auth', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThemeThunk = createAsyncThunk(
  'auth/theme',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const payload = {
        theme: credentials,
      };
      const { data } = await axios.patch('/auth', payload);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmail = createAsyncThunk(
  'email/sendEmail',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.post('/help/send-email', credentials);

      showToast('Message sent successfully!', 'success');
      return data;
    } catch (error) {
      showToast(`${error.message} Message was not sent, please retry`, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  'auth/getUserThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user (no token found)');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/auth');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
