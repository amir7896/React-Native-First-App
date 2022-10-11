import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AuthApi from '../../services/Api/AuthApi';

const initialState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedIn: false,
  message: '',
};

// Register User Slice ....
export const register = createAsyncThunk(
  'aut/register',
  async (user, thunkAPI) => {
    try {
      const response = await AuthApi.resgisterUser(user);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// Login User Slice  ...
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await AuthApi.singInUser(user);
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout User Slice  ...
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthApi.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    rest: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isLoggedIn = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      // Register Case ...
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      // Login Case ...
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoggedIn = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
      });
  },
});

export const {rest} = authSlice.actions;
export default authSlice.reducer;
