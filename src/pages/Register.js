import { useForm } from "react-hook-form";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { PasswordInput } from "../components/PasswordInput.js";

export const Register = () => {
  const [isMember, setIsMember] = useState(true);

  const schema = yup.object().shape({
    name: !isMember ? yup.string().required("name is required") : yup.string(),
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must contain one uppercase, one lowercase, one digit, one special character and min 8 chars long"
      )
      .required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toggleIsMember = () => {
    setIsMember((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <h3>{isMember ? "login" : "register"}</h3>
        {/* Name */}
        {!isMember && (
          <FormRow
            type="text"
            label="name"
            register={register}
            errors={errors}
            isInvalid={errors.name}
          />
        )}
        {/* Email */}
        <FormRow
          type="text"
          label="email"
          register={register}
          errors={errors}
          isInvalid={errors.email}
        />
        {/* Password */}
        <PasswordInput
          label="password"
          register={register}
          errors={errors}
          isInvalid={errors.password}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {isMember ? "Not a member yet?" : "already a member?"}
          <button type="button" className="member-btn" onClick={toggleIsMember}>
            {isMember ? "register" : "login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
