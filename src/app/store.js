import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/User/UserSlice';
import campGroundReducer from '../features/CampGrounds/CampGroundSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    camps: campGroundReducer,
  },
});
