import { useEffect } from "react";
import { JobsContainer, JobSearchContainer } from "../../components";
import { useDispatch } from "react-redux";
import { clearEditing } from "../../features/job/jobSlice.js";

export const AllJobs = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(clearEditing())
  },[])
  return (
    <>
      <JobSearchContainer />
      <JobsContainer />
    </>
  );
};
