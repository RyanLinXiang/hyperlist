import React from "react";
import Input from "./FormComponents/Input.js";
import connectAPI from "./api";

class Messenger extends React.Component {
  state = { showMessenger: true, inputValue: false };

  handlerSubmit = (event) => {
    event.preventDefault();
    const userinput = event.target.message.value;
    if (userinput) {
      const { id, adUserId, token } = this.props;
      const extension = "ad/" + id + "/message/" + adUserId;
      connectAPI(extension, "POST", { text: userinput }, token).then((e) => {
        this.setState({ showMessenger: false });
      });
    }
  };

  handlerChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const name = this.props.name;
    const { showMessenger, inputValue } = this.state;

    return showMessenger ? (
      <div className="messenger">
        <form onSubmit={this.handlerSubmit}>
          <div>
            <Input
              id="message"
              placeholder={"Message " + name}
              icons="fas fa-envelope"
              handlerChange={this.handlerChange}
              value={inputValue}
            />
          </div>
          <div>
            <button type="submit" className="button">
              Message
            </button>
          </div>
        </form>
      </div>
    ) : (
      <span className="tag is-success">Message has been successfully sent</span>
    );
  }
}

export default Messenger;
