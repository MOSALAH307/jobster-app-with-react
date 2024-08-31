import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.js";
import jobSlice from "./features/job/jobSlice.js";
import allJobsSlice from "./features/allJobs/allJobsSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice
  }
})