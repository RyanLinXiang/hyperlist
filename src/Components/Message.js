import React from "react";
const Message = (props) => {
  const { handler, classname, message } = props;
  const handlerFinalConfirm = props.handlerFinalConfirm
    ? props.handlerFinalConfirm
    : false;

  return (
    <div className="modal is-active" style={{ zIndex: "100" }} id="message">
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className={"message " + classname}>
          <div className="message-header">
            <p></p>
            <button
              className="delete"
              aria-label="delete"
              id="close_message"
              type="button"
              onClick={handler}
            ></button>
          </div>
          <div className="message-body">{message}</div>
          {handlerFinalConfirm ? (
            <button
              type="button"
              className="button is-danger"
              onClick={handlerFinalConfirm}
            >
              Yes
            </button>
          ) : null}
        </article>
      </div>
    </div>
  );
};

export default Message;
