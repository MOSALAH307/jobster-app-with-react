import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, getAllStats } from "./allJobsThunk.js";

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
};

export const getAllJobs = createAsyncThunk("allJobs/getJobs", getAllJobsThunk);

export const getStats = createAsyncThunk("allJobs/showStats", getAllStats);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    setSearchValues: (state, { payload }) => {
      state.search = payload.search;
      state.searchStatus = payload.searchStatus;
      state.searchType = payload.searchType;
      state.sort = payload.sort;
      state.page = 1; // Reset page to 1 when filters change
    },
    clearAllJobs: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (status) => {
      status.isLoading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (status, { payload }) => {
      status.isLoading = false;
      const { jobs, totalJobs, numOfPages } = payload;
      status.jobs = jobs;
      status.totalJobs = totalJobs;
      status.numOfPages = numOfPages;
    });
    builder.addCase(getAllJobs.rejected, (status, { payload }) => {
      status.isLoading = false;
      toast.error(payload);
    });
    builder.addCase(getStats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStats.fulfilled, (status, { payload }) => {
      status.isLoading = false;
      status.stats = payload.defaultStats;
      status.monthlyApplications = payload.monthlyApplications;
    });
    builder.addCase(getStats.rejected, (status, { payload }) => {
      status.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { showLoading, hideLoading, changePage, clearAllJobs, setSearchValues } =
  allJobsSlice.actions;
export default allJobsSlice.reducer;
