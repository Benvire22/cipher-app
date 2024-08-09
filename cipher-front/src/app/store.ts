import { configureStore } from '@reduxjs/toolkit';
import { cipherReducer } from '../features/cipher/cipherSlice';

export const store = configureStore({
  reducer: {
    cipher: cipherReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;