import React from "react";
import dayspast from "./dayspast";

const MessageItem = (props) => {
  const { id, handler, messageText, createdAt } = props;

  return (
    <div className="box">
      <div className="subtitle">
        {messageText + " "}
        <button
          onClick={handler.bind(this, id)}
          className="button is-small"
          type="button"
        >
          Full Ad
        </button>{" "}
        <span className="tag is-light">
          {dayspast(createdAt) > 1
            ? dayspast(createdAt) + " days"
            : dayspast(createdAt) + " day"}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
