import React from "react";
const Message = () => {
  return (
    <div className="modal" id="message">
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <p></p>
            <button
              className="delete"
              aria-label="delete"
              id="close_message"
            ></button>
          </div>
          <div className="message-body"></div>
        </article>
      </div>
    </div>
  );
};

export default Message;
