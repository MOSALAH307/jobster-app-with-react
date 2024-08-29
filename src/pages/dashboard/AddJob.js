import { useForm } from "react-hook-form";
import { FormRow, FormRowSelect } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { addJob, clearValues } from "../../features/job/jobSlice.js";
import { useEffect } from "react";

export const statusList = [
  {
    id: 1,
    name: "interview",
  },
  {
    id: 2,
    name: "declined",
  },
  {
    id: 3,
    name: "pending",
  },
];
export const typesList = [
  {
    id: 1,
    name: "full-time",
  },
  {
    id: 2,
    name: "part-time",
  },
  {
    id: 3,
    name: "remote",
  },
  {
    id: 4,
    name: "internship",
  },
];
export const AddJob = () => {
  const { isLoading } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    position: yup.string().required("position is required"),
    company: yup.string().required("company is required"),
    jobLocation: yup.string().required("job location is required"),
    status: yup.string().required("job status is required"),
    jobType: yup.string().required("job type is required"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (user) {
      reset({
        // position: job.position || "",
        // company: job.company || "",
        jobLocation: user.location || "",
        // status: job.status,
        // jobType: job.jobType
      });
    }
  }, [user, reset]);

  const handleClear = () => {
    reset({
      position: "",
      company: "",
      jobLocation: "",
      status: "",
      jobType: "",
    });
  };

  const onSubmit = (data) => {
    dispatch(addJob(data));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>add job</h3>
        <div className="form-center">
          {/* Position* */}
          <FormRow
            type="text"
            label="position"
            name="position"
            register={register}
            errors={errors}
            isInvalid={errors.position}
            required={true}
          />
          {/* Company* */}
          <FormRow
            type="text"
            label="company"
            name="company"
            register={register}
            errors={errors}
            isInvalid={errors.company}
            required={true}
          />
          {/* Job Location* */}
          <FormRow
            type="text"
            label="job location"
            name="jobLocation"
            register={register}
            errors={errors}
            isInvalid={errors.jobLocation}
            required={true}
          />
          {/* Status */}
          <FormRowSelect
            label="status"
            name="status"
            list={statusList}
            register={register}
            required={true}
            errors={errors}
            isInvalid={errors.status}
          />

          {/* Job type */}
          <FormRowSelect
            label="job type"
            name="jobType"
            list={typesList}
            register={register}
            required={true}
            errors={errors}
            isInvalid={errors.jobType}
          />
          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={handleClear}
            >
              clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "submit"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
