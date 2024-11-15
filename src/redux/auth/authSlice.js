import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operation from './authOperations';

const initialState = {
  user: { name: null, email: null, avatar: null, theme: 'light' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  //add loading indicator
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(operation.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // .addCase(operation.refreshUser.pending, state => {
      //   state.isRefreshing = true;
      // })
      // .addCase(operation.refreshUser.fulfilled, (state, action) => {
      //   state.user = action.payload;
      // })
      .addCase(operation.updateUserTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addMatcher(
        isAnyOf(
          operation.register.fulfilled,
          operation.logIn.fulfilled,
          operation.updateUser.fulfilled
        ),
        (state, action) => {
          state.user.name = action.payload.name;
          state.user.email = action.payload.email;
        }
      )
      .addMatcher(
        isAnyOf(operation.register.fulfilled, operation.logIn.fulfilled),
        (state, action) => {
          state.token = action.payload.token;
        }
      )
      .addMatcher(
        isAnyOf(
          operation.register.fulfilled,
          operation.logIn.fulfilled,
          // operation.refreshUser.fulfilled,
          operation.updateUser.fulfilled,
          operation.updateUserTheme.fulfilled,
          operation.needHelp.fulfilled
        ),
        state => {
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        isAnyOf(operation.logIn.fulfilled, operation.updateUser.fulfilled),
        (state, action) => {
          state.user.avatar = action.payload.avatar;
          state.user.theme = action.payload.theme;
        }
      )
      .addMatcher(
        isAnyOf(
          operation.logOut.fulfilled
          // operation.refreshUser.rejected
        ),
        state => {
          state.isRefreshing = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
