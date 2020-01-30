import React from "react";

function InputField({ onChange, placeholder, name, value }) {
  return (
    <input
      type="text"
      value={value}
      className="form-control"
      placeholder={placeholder}
      onChange={event => onChange(name, event)}
    />
  );
}

export default InputField;
