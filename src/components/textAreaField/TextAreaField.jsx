import React from "react";

const TextAreaField = ({ label, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label> <br />
      <textarea value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default TextAreaField;
