import React from "react";
const Input = (props) => {
  const { id, label, placeholder, icons, value, handlerChange } = props;
  const content = value ? value : "";

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className={`control  + ${icons ? "has-icons-left" : null}`}>
        <input
          className="input"
          id={id}
          type="text"
          placeholder={placeholder}
          value={content}
          onChange={handlerChange}
        />
        {icons ? (
          <span className="icon is-small is-left">
            <i className={icons}></i>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
