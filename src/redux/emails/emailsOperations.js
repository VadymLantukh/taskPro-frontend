// import axios from 'axios';
// import { clearStatus } from '../emails/emailsSlice';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const sendEmail = createAsyncThunk(
//   'email/sendEmail',
//   async (emailData, { rejectWithValue }) => {
//     try {
//       const res = await axios.post('/help/send-email', emailData);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to send email');
//     }
//   }
// );

// export const sendHelpRequestEmail = emailData => async dispatch => {
//   try {
//     const res = await dispatch(sendEmail(emailData)).unwrap();
//     dispatch(clearStatus());
//     return res.message;
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     dispatch(clearStatus());
//     throw error;
//   }
// };
