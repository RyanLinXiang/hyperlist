import React from "react";

const Item = (props) => {
  const { title, desc } = props;
  return (
    <div className="box">
      <p className="title is-4">{title}</p>
      <p className="subtitle">
        {desc + " ... "}
        <a href="javascript:void(0);" className="readmore" data-id="">
          read more
        </a>
      </p>
    </div>
  );
};

export default Item;
