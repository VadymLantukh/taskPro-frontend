import { createSlice } from '@reduxjs/toolkit';
import * as operation from './authOperations';
import { addBoard, deleteBoard, updateBoard } from '../board/boardOperations';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    avatar: null,
    theme: 'light',
    boards: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  //add loading indicator
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTheme(state) {
      document.body.classList = state.user.theme;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(operation.logOutThunk.fulfilled, state => {
        state.user = {
          _id: null,
          name: null,
          email: null,
          avatar: null,
          theme: 'light',
          boards: [],
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operation.logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user._id = action.payload.userId;
        state.isLoggedIn = true;
      })
      .addCase(operation.registerThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        //TODO add TOAST
      })
      .addCase(operation.updateUserThemeThunk.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(operation.getUserThunk.pending, state => {
        state.isRefreshing = true;
        console.log('penis');
      })
      .addCase(operation.getUserThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.data };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log('fulfilled');
      })
      .addCase(operation.getUserThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        console.log('rejected');
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.user.boards.push(action.payload);
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user.boards = state.user.boards.filter(
          board => board._id !== action.payload
        );
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        console.log(action.payload);

        state.user.boards = state.user.boards.map(board =>
          board._id === action.payload._id ? action.payload : board
        );
      }),
});

export const authReducer = authSlice.reducer;
export const { setTheme } = authSlice.actions;
