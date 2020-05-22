import React from "react";
import connectAPI from "./api.js";
import Message from "./Message.js";

class AddItemForm extends React.Component {
  state = { status: { error: false, message: false } };

  handlerMessage = (error, message) => {
    this.setState({ status: { error, message } });
  };

  handlerSubmitForm = (event) => {
    if (event && event !== "reset") {
      event.preventDefault();

      const title = event.target.title.value;
      const description = event.target.description.value;
      const name = event.target.name.value;
      const location = event.target.location.value;
      const price = parseFloat(event.target.price.value.replace(",", "."));
      const priceNegotiable = event.target.priceNegotiable.checked
        ? true
        : false;
      const email = event.target.email.value;

      if (title && description && name && location && email) {
        if (!isNaN(price) || price === 0) {
          const data = {
            title,
            description,
            name,
            location,
            price,
            priceNegotiable,
            email,
          };

          connectAPI("ad", "POST", data).then((e) => {
            this.handlerMessage(false, "Your ad has been successfully added!");
          });
        } else {
          this.handlerMessage(true, "Number is in a wrong format!");
        }
      } else {
        this.handlerMessage(true, "All fields are required!");
      }
    } else {
      event === "reset" ? console.log("reset") : this.props.handler();
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.status.error ? (
          <Message
            error={this.state.status.error}
            message={this.state.status.message}
            handler={this.handlerMessage}
          />
        ) : null}
        <form name="entry" onSubmit={this.handlerSubmitForm}>
          <div className="modal is-active" id="add_entry">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Create a new ad</p>
                <button
                  className="delete"
                  id="close_add_entry"
                  aria-label="close"
                  onClick={this.handlerSubmitForm.bind(this, false)}
                ></button>
              </header>

              <section className="modal-card-body">
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      id="title"
                      type="text"
                      placeholder="enter the title (max 80 characters long)"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      id="description"
                      placeholder="description"
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      id="name"
                      type="text"
                      placeholder="enter your name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Location</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      id="location"
                      type="text"
                      placeholder="enter your location"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Price</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      id="price"
                      type="text"
                      placeholder="price"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-euro-sign"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">Negotiable</label>
                    <input type="checkbox" id="priceNegotiable" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      id="email"
                      type="email"
                      placeholder="name@maxmuster.com"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
              </section>

              <footer className="modal-card-foot">
                <button type="submit" className="button is-link">
                  Submit
                </button>
                <button
                  className="button"
                  id="reset"
                  onClick={this.handlerSubmitForm.bind(this, "reset")}
                  type="button"
                >
                  Reset
                </button>
              </footer>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddItemForm;
