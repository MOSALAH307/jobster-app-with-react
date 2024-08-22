export const FormRow = ({ label, register, isInvalid, errors, type, name }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
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
