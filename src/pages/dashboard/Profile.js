import { useDispatch, useSelector } from "react-redux";
import { FormRow } from "../../components/FormRow.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { updateUser } from "../../features/user/userSlice.js";

export const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "name must be at least 3 characters")
      .required("name is required"),
    lastName: yup
      .string()
      .min(3, "last name must be at least 3 characters")
      .required("last name is required"),
    email: yup.string().email("Invalid email").required("email is required"),
    location: yup.string().required("location is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        lastName: user.lastName || "",
        email: user.email || "",
        location: user.location || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    dispatch(updateUser(data));
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            label="name"
            name="name"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.name}
            required={true}
          />
          <FormRow
            label="last name"
            name="lastName"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.lastName}
            required={true}
          />
          <FormRow
            label="email"
            name="email"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.email}
            required={true}
          />
          <FormRow
            label="location"
            name="location"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.location}
            required={true}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
