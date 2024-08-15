export const FormRow = ({ label, register, isInvalid, errors, type }) => {
  return (
    <div className="form-row">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        {...register(`${label}`)}
        type={type}
        className={`form-input ${isInvalid ? "invalid" : ""}`}
      />
      {errors[label] && (
        <span className="invalid-feedback">{errors[label]?.message}</span>
      )}
    </div>
  );
};
