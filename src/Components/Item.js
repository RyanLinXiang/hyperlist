import React from "react";

const Item = (props) => {
  const { id, title, desc, handler } = props;

  return (
    <div className="box">
      <p className="title is-4">{title}</p>
      <p className="subtitle">
        {desc + " ... "}
        <a
          onClick={() => {
            handler(id);
          }}
          className="readmore"
        >
          read more
        </a>
      </p>
    </div>
  );
};

export default Item;
