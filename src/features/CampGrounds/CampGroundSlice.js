import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import CampGroundApi from '../../services/Api/CampGroundApi';

const initialState = {
  camps: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoggedIn: false,
  message: '',
};

//   Get All Camps Slice  ...
export const getCamps = createAsyncThunk(
  'camps/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await CampGroundApi.getAllCamps();
      return response;
    } catch (error) {
      console.log('Error in get all Camps slice  ===', error);
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

export const campSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {
    reset: state => initialState,
  },

  extraReducers: builder => {
    builder
      .addCase(getCamps.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.camps = action.payload;
      })
      .addCase(getCamps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = campSlice.actions;
export default campSlice.reducer;
