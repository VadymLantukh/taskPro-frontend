import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as operation from './authOperations';
import { addBoard, deleteBoard, updateBoard } from '../board/boardOperations';
import { handleFulFilled, handlePending, handleRejected } from '../handlers';

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
  isLoading: false,
  isError: null,
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTheme(state) {
      document.body.classList = state.user.theme;
    },
    changeTheme(state, action) {
      state.user.theme = action.payload;
    },
    setIsSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
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
      .addCase(operation.updateUserThemeThunk.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(operation.updateUserThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })

      .addCase(operation.getUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(operation.getUserThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.data };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(operation.getUserThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.user.boards.push(action.payload);
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.user.boards = state.user.boards.filter(
          board => board._id !== action.payload
        );
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.user.boards = state.user.boards.map(board =>
          board._id === action.payload._id ? action.payload : board
        );
      })
      .addMatcher(
        isAnyOf(
          operation.logInThunk.pending,
          operation.logOutThunk.pending,
          operation.registerThunk.pending,
          operation.updateUserThemeThunk.pending,
          operation.updateUserThunk.pending,
          operation.getUserThunk.pending,
          deleteBoard.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          operation.logInThunk.fulfilled,
          operation.logOutThunk.fulfilled,
          operation.registerThunk.fulfilled,
          operation.updateUserThemeThunk.fulfilled,
          operation.updateUserThunk.fulfilled,
          operation.getUserThunk.fulfilled,
          deleteBoard.fulfilled
        ),
        handleFulFilled
      )
      .addMatcher(
        isAnyOf(
          operation.logInThunk.rejected,
          operation.logOutThunk.rejected,
          operation.registerThunk.rejected,
          operation.updateUserThemeThunk.rejected,
          operation.updateUserThunk.rejected,
          operation.getUserThunk.rejected,
          deleteBoard.rejected
        ),
        handleRejected
      ),
});

export const authReducer = authSlice.reducer;
export const { setTheme, changeTheme, setIsSidebarOpen } = authSlice.actions;
