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
            label="name *"
            name="name"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.name}
          />
          <FormRow
            label="last name *"
            name="lastName"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.lastName}
          />
          <FormRow
            label="email *"
            name="email"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.email}
          />
          <FormRow
            label="location *"
            name="location"
            type="text"
            register={register}
            errors={errors}
            isInvalid={errors.location}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

// const Wrapper = styled.section`
//   background: var(--white);
//   border-radius: var(--borderRadius);
//   width: 100%;
//   padding: 3rem 2rem 4rem;
//   box-shadow: var(--shadow-2);
//   h3 {
//     margin-top: 0;
//   }
//   .form {
//     box-shadow: none;
//     max-width: 100%;
//     width: 100%;
//     margin: 0;
//     padding: 0;
//     border-radius: 0;
//   }
//   .form-row {
//     margin-bottom: 0;
//   }
//   .form-center {
//     display: grid;
//     row-gap: 0.5rem;
//   }
//   .form-center button {
//     align-self: end;
//     margin-top: 1rem;
//     height: 35px;
//   }
//    @media (min-width: 992px) {
//     .form-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//       column-gap: 1rem;
//     }
//   }
//   @media (min-width: 1120px) {
//     .form-center {
//       grid-template-columns: 1fr 1fr 1fr;
//     }
//     .form-center button {
//       margin-top: 0;
//     }
//   }
// `;
