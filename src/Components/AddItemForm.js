import React from "react";
import connectAPI from "./api.js";
import Message from "./Message.js";
import Header from "./FormComponents/Header.js";
import Input from "./FormComponents/Input.js";
import TextArea from "./FormComponents/TextArea.js";
import CheckBox from "./FormComponents/CheckBox.js";

class AddItemForm extends React.Component {
  state = {
    status: { error: false, message: false },
    formContents: [
      {
        type: "input",
        id: "title",
        label: "Title",
        placeholder: "enter the title (max 80 characters long)",
        icons: false,
        required: true,
        showForRegistered: true,
      },
      {
        type: "textarea",
        id: "description",
        label: "Description",
        placeholder: "description",
        required: true,
        showForRegistered: true,
      },
      {
        type: "input",
        id: "name",
        label: "Name",
        placeholder: "enter your name",
        icons: "fas fa-user",
        required: true,
        showForRegistered: false,
      },
      {
        type: "input",
        id: "location",
        label: "Location",
        placeholder: "enter your location",
        icons: "fas fa-map-marker-alt",
        required: true,
        showForRegistered: true,
      },
      {
        type: "input",
        id: "price",
        label: "Price",
        placeholder: "price - can be 0",
        icons: "fas fa-euro-sign",
        required: true,
        showForRegistered: true,
      },
      {
        type: "checkbox",
        id: "priceNegotiable",
        label: "Negotiable?",
        required: false,
        showForRegistered: true,
      },
      {
        type: "input",
        id: "email",
        label: "E-Mail",
        placeholder: "name@maxmuster.com",
        icons: "fas fa-envelope",
        required: true,
        showForRegistered: false,
      },
    ],
  };

  handlerFeedback = (error, message, closeform, refresh) => {
    this.setState({ status: { error, message } });

    if (closeform) this.props.handler(refresh);
  };

  handlerSubmitForm = (event) => {
    event.preventDefault();
    let allRequiredFilled = true;
    let priceFormatValid = true;
    const token = this.props.token;
    let data = {};

    for (let e of this.state.formContents) {
      if (!token || (token && e.showForRegistered)) {
        const userentry = event.target[e.id].value;

        if (
          (!token && e.required && userentry) || //Nicht eingeloggt, Pflichtfeld und Wert vorhanden = OK
          (!token && !e.required && userentry) || // Nicht eingeloggt, kein Pflichtfeld und Wert vorhanden = OK
          (token && e.required && userentry) || // Ist eingeloggt, Pflichtfeld und Wert vorhanden = OK
          (token && !e.required && userentry) // Ist eingeloggt, kein Pflichtfeld und Wert vorhanden = OK
        )
          data[e.id] = userentry;
        else if (
          (!token && !e.required && !userentry) || // Nicht eingeloggt, kein Pflichtfeld und kein Wert vorhanden = SKIP
          (token && !e.required && !userentry) // Ist eingeloggt, kein Pflichtfeld und kein Wert vorhanden = SKIP
        )
          continue;
        else {
          allRequiredFilled = false;
          break;
        }
      }
    }

    if (data.price) {
      data.price = parseFloat(data.price.replace(",", "."));
      if (isNaN(data.price)) priceFormatValid = false;
    }

    data.priceNegotiable = data.priceNegotiable ? true : false;

    if (allRequiredFilled) {
      if (priceFormatValid) {
        const urlExtension = token ? "user/me/ad" : "ad";

        connectAPI(urlExtension, "POST", data, token).then((e) => {
          this.handlerFeedback(
            false,
            "Your ad has been successfully added!",
            false,
            false
          );
        });
      } else {
        this.handlerFeedback(
          true,
          "Number is in a wrong format!",
          false,
          false
        );
      }
    } else {
      this.handlerFeedback(true, "All fields are required!", false, false);
    }
  };

  render() {
    const { error, message } = this.state.status;
    const token = this.props.token;
    const classname = error ? "is-danger" : "is-primary";
    const completed = error ? false : true;

    return (
      <React.Fragment>
        {message ? (
          <Message
            classname={classname}
            message={message}
            handler={this.handlerFeedback.bind(
              this,
              false,
              false,
              completed,
              completed
            )}
          />
        ) : null}

        <form name="entry" onSubmit={this.handlerSubmitForm}>
          <div className="modal is-active" id="add_entry">
            <div className="modal-background"></div>
            <div className="modal-card">
              <Header
                label="Create your ad"
                handler={this.handlerFeedback.bind(
                  this,
                  false,
                  false,
                  true,
                  false
                )}
              />

              <section className="modal-card-body">
                {this.state.formContents.map((e) => {
                  if (!token || (token && e.showForRegistered === true)) {
                    switch (e.type) {
                      case "input":
                        return (
                          <Input
                            id={e.id}
                            key={e.id}
                            label={e.label}
                            placeholder={e.placeholder}
                            icons={e.icons}
                          />
                        );

                      case "textarea":
                        return (
                          <TextArea
                            id={e.id}
                            key={e.id}
                            label={e.label}
                            placeholder={e.placeholder}
                          />
                        );

                      case "checkbox":
                        return (
                          <CheckBox id={e.id} key={e.id} label={e.label} />
                        );

                      default:
                        return null;
                    }
                  }
                })}
              </section>

              <footer className="modal-card-foot">
                <button type="submit" className="button is-link">
                  Submit
                </button>
                <button className="button" id="reset" type="button">
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
