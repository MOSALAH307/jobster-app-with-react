import React, { useState } from "react";

export const PasswordInput = ({ label, register, isInvalid, errors, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassVisibilty = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        password <span style={{ color: "red" }}> *</span>
      </label>
      <div className="password-wrapper">
        <input
          id={name}
          {...register(`${name}`)}
          type={showPassword ? "text" : "password"}
          className={`form-input ${isInvalid ? "invalid" : ""}`}
        />
        {name === "password" && (
          <span className="password-toggle-icon" onClick={togglePassVisibilty}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        )}
      </div>
      {errors[name] && (
        <span className="invalid-feedback">{errors[name]?.message}</span>
      )}
    </div>
  );
};
