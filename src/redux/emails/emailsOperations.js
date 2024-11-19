import axios from 'axios';
import { clearStatus } from '../emails/emailsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendEmail = createAsyncThunk(
  'email/sendEmail',
  async (emailData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/help/send-email', emailData);
      return response.data;
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
