import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk.js";

const initialState = {
  isLoading: false,
  job: null,
  isEditing: false,
};

export const addJob = createAsyncThunk("job/addJob", addJobThunk);

export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);

export const editJob = createAsyncThunk("job/editJob", editJobThunk);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setEditedJob: (state, { payload }) => {
      state.isEditing = true;
      state.job = payload;
    },
    clearEditing: (state) => {
      state.isEditing = false;
      state.job = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success("job created successfuly");
    });
    builder.addCase(addJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(deleteJob.fulfilled, (state, { payload }) => {
      toast.success(payload);
    });
    builder.addCase(deleteJob.rejected, (state, { payload }) => {
      toast.error(payload);
    });
    builder.addCase(editJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success("Job Modified ...");
    });
    builder.addCase(editJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { setEditedJob, clearEditing } = jobSlice.actions;
export default jobSlice.reducer;
