import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { boardReducer } from './board/boardSlice';
import { columnsReducer } from './columns/columnsSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { boardsReducer } from './boards/boardSlice';
import { emailReducer } from './emails/emailsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    board: boardReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
    boards: boardsReducer,
    email: emailReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
