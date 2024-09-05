import customFetch, {
  checkForUnauthorizedResponse,
} from "../../utils/axios.js";
import { clearAllJobs } from "../allJobs/allJobsSlice.js";
import { clearEditing } from "../job/jobSlice.js";
import { logoutUser } from "./userSlice.js";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user);
    return response.data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user);
    return response.data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user);
    return response.data;
  } catch (error) {
    console.error(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser());
    thunkAPI.dispatch(clearAllJobs());
    thunkAPI.dispatch(clearEditing());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
