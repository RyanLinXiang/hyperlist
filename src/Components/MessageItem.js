import React from "react";
import dayspast from "./dayspast";

class MessageItem extends React.Component {
  render() {
    const { id, handler, messageText, createdAt } = this.props;

    return (
      <div className="box">
        <div className="subtitle">
          {messageText + " "}
          <button
            onClick={handler.bind(this, id)}
            className="button is-small"
            type="button"
          >
            read full ad
          </button>
          <span className="tag is-light">{dayspast(createdAt) + " days"}</span>
        </div>
      </div>
    );
  }
}

export default MessageItem;
