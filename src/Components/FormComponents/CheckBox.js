import React from "react";
const CheckBox = (props) => {
  const { id, label } = props;

  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">{label}</label>
        <input type="checkbox" id={id} />
      </div>
    </div>
  );
};

export default CheckBox;
