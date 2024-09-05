import customFetch, {
  checkForUnauthorizedResponse,
} from "../../utils/axios.js";
import {
  getAllJobs,
  hideLoading,
  showLoading,
} from "../allJobs/allJobsSlice.js";

export const addJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job);
    return response.data;
  } catch (error) {
    console.error(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading());
    const response = await customFetch.delete(`jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return response.data.msg;
  } catch (error) {
    console.error(error);
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job);
    return response.data;
  } catch (error) {
    console.error(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
