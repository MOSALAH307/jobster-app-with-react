import { useDispatch, useSelector } from "react-redux";
import { Job, Loading, PageBtnContainer } from "./index";
import Wrapper from "../assets/wrappers/JobsContainer.js";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice.js";

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
    page
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort, dispatch]);

  if (isLoading) {
    return <Loading center />;
  }

  if (!jobs.length) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
