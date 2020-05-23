import React from "react";
const TextArea = (props) => {
  const { id, label, placeholder } = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          className="textarea"
          id={id}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
