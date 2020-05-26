import React from "react";
import dayspast from "./dayspast";
import connectAPI from "./api";
import Messenger from "./Messenger";

class MessageItem extends React.Component {
  state = { showInput: false, senderUserName: false };

  componentDidMount() {
    connectAPI("user/" + this.props.senderUserId, "GET", false, false).then(
      (e) => {
        this.setState({ senderUserName: e.name });
      }
    );
  }

  handlerToggleInput = () => {
    this.setState({ showInput: !this.state.showInput });
    this.props.handlerForRefreshHomepage();
  };

  render() {
    const {
      id,
      senderUserId,
      messageText,
      createdAt,
      handlerShowFull,
      token,
      showmessenger,
    } = this.props;

    const senderUserName = this.state.senderUserName;

    return !this.state.showInput ? (
      <div className="box">
        <div className="subtitle">
          {messageText + " "}
          <button
            onClick={handlerShowFull}
            className="button is-small"
            type="button"
          >
            Full Ad
          </button>{" "}
          {showmessenger ? (
            <button
              onClick={this.handlerToggleInput}
              className="button is-small"
              type="button"
            >
              &#8618;
            </button>
          ) : null}{" "}
          <span className="tag is-light">
            {dayspast(createdAt) > 1
              ? dayspast(createdAt) + " days"
              : dayspast(createdAt) + " day"}
          </span>
        </div>
      </div>
    ) : (
      <div className="modal is-active" style={{ zIndex: "100" }} id="message">
        <div className="modal-background"></div>
        <div className="modal-content">
          <article className={"message is-link"}>
            <div className="message-header">
              <p>Your Reply</p>
              <button
                className="delete"
                aria-label="delete"
                id="close_message"
                type="button"
                onClick={this.handlerToggleInput}
              ></button>
            </div>
            <div className="message-body">
              <Messenger
                id={id}
                name={senderUserName}
                adUserId={senderUserId}
                token={token}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default MessageItem;
