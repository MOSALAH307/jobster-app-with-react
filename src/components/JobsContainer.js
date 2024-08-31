import { useDispatch, useSelector } from "react-redux";
import { Job, Loading } from "./index";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice.js";
const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllJobs())
  },[])

  if (isLoading) {
    return <Loading center />;
  }

  if (!jobs.length) {
    return (
      <>
        <h2>No jobs to display...</h2>
      </>
    );
  }
  return (
    <>
      <h5>jobs info</h5>
      {jobs.map((job) => (
        <Job key={job._id} {...job} />
      ))}
    </>
  );
};

export default JobsContainer;
