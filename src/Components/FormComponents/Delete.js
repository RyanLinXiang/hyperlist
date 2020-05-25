import React from "react";
import Message from "../Message";

class Delete extends React.Component {
  state = { warning: false };

  handlerToggleForm = (confirmed) => {
    const handlerDelete = this.props.handler;
    this.setState({ warning: !this.state.warning });
    if (confirmed) handlerDelete();
  };

  render() {
    if (!this.state.warning) {
      return (
        <button
          onClick={this.handlerToggleForm.bind(this, false)}
          type="button"
          className="button is-danger is-small"
        >
          !Delete!
        </button>
      );
    } else {
      return (
        <Message
          handler={this.handlerToggleForm.bind(this, false)}
          handlerFinalConfirm={this.handlerToggleForm.bind(this, true)}
          classname="is-danger"
          message="Are you sure to delete this entry? "
        />
      );
    }
  }
}

export default Delete;
