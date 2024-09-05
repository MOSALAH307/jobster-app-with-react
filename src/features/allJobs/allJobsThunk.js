import customFetch, {
  checkForUnauthorizedResponse,
} from "../../utils/axios.js";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, searchStatus, searchType, sort, page } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) url += `&search=${search}`;
  try {
    const response = await customFetch.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const getAllStats = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    console.error(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
