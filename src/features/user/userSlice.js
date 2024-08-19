import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios.js";
import { toast } from "react-toastify";
import { getUserFromLocalStorage, saveUserInLocalStorage } from "../../utils/localStorage.js";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/regiserUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async(user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/login", user);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      const {user} = payload
      state.isLoading = false
      state.user = user
      saveUserInLocalStorage(user)
      toast.success(`Hello there, ${user.name}`)
    })
    builder.addCase(registerUser.rejected, (state, {payload})=>{
      state.isLoading = false
      toast.error(payload)
    })
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      saveUserInLocalStorage(user);
      toast.success(`Welcome back, ${user.name}`);
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  }
});

export default userSlice.reducer;
