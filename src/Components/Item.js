import React from "react";

const Item = (props) => {
  const { id, title, desc, handler } = props;

  return (
    <div className="box">
      <p className="title is-4">{title}</p>
      <p className="subtitle">
        {desc + " ... "}
        <button
          onClick={() => {
            handler(id);
          }}
          className="button is-small"
          type="button"
        >
          read more
        </button>
      </p>
    </div>
  );
};

export default Item;
