import React from "react";
const CheckBox = (props) => {
  const { id, label, value, handlerChange } = props;

  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">{label}</label>{" "}
        <input
          type="checkbox"
          id={id}
          checked={value ? true : false}
          onChange={handlerChange}
        />
      </div>
    </div>
  );
};

export default CheckBox;
