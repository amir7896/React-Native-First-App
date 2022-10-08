import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/User/UserSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
