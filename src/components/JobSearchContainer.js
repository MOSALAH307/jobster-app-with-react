import { useForm, useWatch } from "react-hook-form";
import FormRowSelect from "./FormRowSelect.js";
import { FormRow } from "./FormRow.js";
import { statusList, typesList } from "../pages/dashboard/AddJob.js";
import Wrapper from "../assets/wrappers/SearchContainer.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchValues } from "../features/allJobs/allJobsSlice.js";
import { debounce } from "lodash";

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
  const dispatch = useDispatch();
  const {
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    },
  });

  const formValues = useWatch({ control });

  const debounceSearch = debounce((formData) => {
    dispatch(setSearchValues(formData)); // Update search values and reset page to 1
  }, 500);

  useEffect(() => {
    debounceSearch(formValues);
    return () => debounceSearch.cancel();
  }, [formValues, dispatch]);

  const handleClear = () => {
    reset({
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    });
    dispatch(
      setSearchValues({
        search: "",
        searchStatus: "all",
        searchType: "all",
        sort: "latest",
      })
    );
    // dispatch(getAllJobs(formValues));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>search form</h3>
        <div className="form-center">
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
            name="searchStatus"
            register={register}
            errors={errors}
            list={[
              {
                id: 5,
                name: "all",
              },
              ...statusList,
            ]}
          />
          {/* search by type*/}
          <FormRowSelect
            label="type"
            name="searchType"
            register={register}
            errors={errors}
            list={[
              {
                id: 5,
                name: "all",
              },
              ...typesList,
            ]}
          />
          {/* sort */}
          <FormRowSelect
            label="sort"
            name="sort"
            register={register}
            errors={errors}
            list={sort}
          />
          <button
            className="btn btn-block btn-danger"
            type="button"
            onClick={handleClear}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default JobSearchContainer;
