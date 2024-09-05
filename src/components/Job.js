import { Link } from "react-router-dom";
import { JobInfo } from "./index.js";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Job.js";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteJob, setEditedJob } from "../features/job/jobSlice.js";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <span className={`status ${status}`}>{status}</span>
        </div>
        <footer>
          <div className="actions">
            <Link to="/addJob" className="btn edit-btn" onClick={() => {
              dispatch(
                setEditedJob({
                  jobId: _id,
                  position,
                  company,
                  jobLocation,
                  jobType,
                  status,
                })
              );
            }}>
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
