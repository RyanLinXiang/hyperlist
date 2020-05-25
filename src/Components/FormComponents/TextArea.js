import React from "react";
const TextArea = (props) => {
  const { id, label, placeholder, value, handlerChange } = props;
  const content = value ? value : "";

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          className="textarea"
          id={id}
          placeholder={placeholder}
          value={content}
          onChange={handlerChange}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
