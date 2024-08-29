export const FormRow = ({ label, register, isInvalid, errors, type, name, required }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label} {required ? <span style={{color: "red"}}> *</span> : ""}
      </label>
      <input
        id={name}
        {...register(`${name}`)}
        type={type}
        className={`form-input ${isInvalid ? "invalid" : ""}`}
      />
      {errors[name] && (
        <span className="invalid-feedback">{errors[name]?.message}</span>
      )}
    </div>
  );
};
