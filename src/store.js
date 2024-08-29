import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice.js";
import jobSlice from "./features/job/jobSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice
  }
})