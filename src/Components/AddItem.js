import React from "react";
import AddItemForm from "./AddItemForm";

class AddItem extends React.Component {
  state = { Form: false };

  handlerToggleForm = (refresh) => {
    this.setState({ Form: !this.state.Form });

    if (refresh) this.props.handler(false, true);
  };

  render() {
    return !this.state.Form ? (
      <div className="box is-shadowless has-icons-right">
        <button
          className="button is-link"
          id="new_entry"
          data-target="modal-ter"
          aria-haspopup="true"
          onClick={this.handlerToggleForm.bind(this, false)}
        >
          Add New Article
        </button>
      </div>
    ) : (
      <AddItemForm handler={this.handlerToggleForm} />
    );
  }
}

export default AddItem;
