import axios from 'axios';
import { clearStatus } from '../emails/emailsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const sendEmail = createAsyncThunk(
  'email/sendEmail',
  async (emailData, { rejectWithValue }) => {
    try {
      const res = await axios.post('/help/send-email', emailData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to send email');
    }
  }
);

export const sendHelpRequestEmail = emailData => async dispatch => {
  try {
    const response = await dispatch(sendEmail(emailData)).unwrap();

    console.log('Email sent successfully:', response.message);
    dispatch(clearStatus());
    return response.message;
  } catch (error) {
    console.error('Failed to send email:', error);
    dispatch(clearStatus());
    throw error;
  }
};
