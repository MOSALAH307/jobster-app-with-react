import React, { useState } from "react";

export const PasswordInput = ({ label, register, isInvalid, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibilty = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="form-row">
      <label htmlFor={label}>{label}</label>
      <div className="password-wrapper">
        <input
          id={label}
          {...register(`${label}`)}
          type={showPassword ? "text" : "password"}
          className={`form-input ${isInvalid ? "invalid" : ""}`}
        />
        {label === "password" && (
          <span className="password-toggle-icon" onClick={togglePassVisibilty}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        )}
      </div>
      {errors[label] && (
        <span className="invalid-feedback">{errors[label]?.message}</span>
      )}
    </div>
  );
};
