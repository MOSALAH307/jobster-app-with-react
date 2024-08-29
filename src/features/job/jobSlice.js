import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios.js";
import { logoutUser } from "../user/userSlice.js";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  // job: {
  //   position: "",
  //   company: "",
  //   jobLocation: "",
  //   status: "pending",
  //   jobType: "full-time",
  // },
  job: null,
};

export const addJob = createAsyncThunk("job/addJob", async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  // reducers: {
  //   clearValues: () => {
  //     return initialState;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(addJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addJob.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      // const { job } = payload;
      // state.job = job;
      toast.success("job created successfuly");
    });
    builder.addCase(addJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

// export const { clearValues } = jobSlice.actions;
export default jobSlice.reducer;
