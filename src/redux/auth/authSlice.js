import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as operation from './authOperations';

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
      .addCase(operation.getUserThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.data };
      }),
  // .addMatcher(
  //   isAnyOf(
  //     operation.register.fulfilled,
  //     operation.logIn.fulfilled,
  //     operation.updateUser.fulfilled,
  //     operation.getUserThunk.fulfilled
  //   ),
  //   (state, action) => {
  //     state.user = { ...state.user, ...action.payload.data };
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(operation.register.fulfilled, operation.logIn.fulfilled),
  //   (state, action) => {
  //  ;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     // operation.register.fulfilled,
  //     operation.logIn.fulfilled,
  //     // operation.refreshUser.fulfilled,
  //     operation.updateUser.fulfilled,
  //     operation.updateUserTheme.fulfilled,
  //     operation.needHelp.fulfilled
  //   ),
  //   state => {
  //     state.isLoggedIn = true;
  //     state.isRefreshing = false;
  //   }
  // )
  // .addMatcher(
  //   isAnyOf(
  //     operation.logOut.fulfilled
  //     // operation.refreshUser.rejected
  //   ),
  //   state => {
  //     state.isRefreshing = false;
  //   }
  // ),
});

export const authReducer = authSlice.reducer;
