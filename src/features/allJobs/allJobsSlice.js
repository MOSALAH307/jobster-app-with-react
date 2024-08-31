import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios.js";
import { toast } from "react-toastify";
import { loginUser } from "../user/userSlice.js";

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
};

export const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  const url = "/jobs";
  try {
    const response = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });    
    return response.data;
  } catch (error) {
    console.error(error);
    if(error.response.status === 401){
      thunkAPI.dispatch(loginUser())
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (status) => {
      status.isLoading = true
    })
    builder.addCase(getAllJobs.fulfilled, (status, {payload}) => {
      status.isLoading = false
      const {jobs, totalJobs, numOfPages} = payload
      status.jobs = jobs
      status.totalJobs = totalJobs
      status.numOfPages = numOfPages
    })
    builder.addCase(getAllJobs.rejected, (status, {payload}) => {
      status.isLoading = false
      toast.error(payload)
    })
  }
});

export default allJobsSlice.reducer;
