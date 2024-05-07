import React from "react";

const InputField = ({ label, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label> <br />
      <input value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default InputField;
