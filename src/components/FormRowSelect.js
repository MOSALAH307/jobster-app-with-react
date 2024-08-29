const FormRowSelect = ({ name, list, label, register, required, errors, isInvalid }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {label} {required ? <span style={{ color: "red" }}> *</span> : ""}
      </label>
      <select
        id={name}
        {...register(`${name}`)}
        className={`form-select ${isInvalid ? "invalid" : ""}`}
      >
        {list.map((t) => (
          <option key={t.id} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="invalid-feedback">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default FormRowSelect;
