import { useForm } from "react-hook-form";
import Wrapper from "../assets/wrappers/DashboardFormPage.js";
import FormRowSelect from "./FormRowSelect.js";
import { FormRow } from "./FormRow.js";
import { statusList, typesList } from "../pages/dashboard/AddJob.js";

const types = [
  {
    id: 5,
    name: "all",
  },
  ...typesList,
];

const status = [
  {
    id: 5,
    name: "all",
  },
  ...statusList,
];

const sort = [
  {
    id: 1,
    name: "latest",
  },
  {
    id: 2,
    name: "oldest",
  },
  {
    id: 3,
    name: "a-z",
  },
  {
    id: 4,
    name: "z-a",
  },
];

const JobSearchContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>search form</h3>
        {/* search position */}
        <FormRow
          label="search"
          name="search"
          register={register}
          type="text"
          errors={errors}
        />
        {/* search by status */}
        <FormRowSelect
          label="status"
          name="status"
          register={register}
          errors={errors}
          list={status}
        />
        {/* search by type*/}
        <FormRowSelect
          label="type"
          name="type"
          register={register}
          errors={errors}
          list={types}
        />
        {/* sort */}
        <FormRowSelect
          label="sort"
          name="sort"
          register={register}
          errors={errors}
          list={sort}
        />
        <button className="btn btn-block btn-danger" type="button">
          clear filters
        </button>
      </form>
    </Wrapper>
  );
};

export default JobSearchContainer;
