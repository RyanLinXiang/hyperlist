import React from "react";
import connectAPI from "./api";
import Form from "./FormComponents/Form";
import formStateInitial from "./FormComponents/formStateInitial.js";
import Message from "./Message.js";

class FormControl extends React.Component {
  state = { Form: false, ...formStateInitial };

  handlerToggleForm = (closeAdPage, refreshHomePage) => {
    const { handlerForCloseFull, handlerForRefreshHomepage } = this.props;

    const id = this.props.id ? this.props.id : false;

    if (this.state.Form) {
      this.setState({ Form: false }); // Close form if form is already showing
    } else {
      if (id) {
        connectAPI("ad/" + id, "GET").then((item) => {
          let formContents = [...this.state.formContents];

          formContents.forEach((formElement) => {
            if (formElement.showForRegistered) {
              if (item[formElement.id])
                formElement.value = item[formElement.id];
            }
          });

          this.setState({ Form: id, formContents: formContents }); //Edit Form hence prepare form data
        });
      } else {
        this.setState({ Form: true }); // Add Form hence just show form
      }
    }
    if (handlerForCloseFull && closeAdPage) handlerForCloseFull();

    if (refreshHomePage) handlerForRefreshHomepage();
  };

  handlerFeedback = (
    error,
    message,
    closeform,
    closeAdPage,
    refreshHomePage
  ) => {
    this.setState({ status: { error, message } });

    if (closeform) this.handlerToggleForm(closeAdPage, refreshHomePage);
  };

  handlerReset = () => {
    const formContents = [...this.state.formContents];
    formContents.forEach((e) => (e.value = ""));
    this.setState({ formContents: formContents });
  };

  handlerChange = (event) => {
    const formContents = [...this.state.formContents];
    formContents.filter((e) => e.id === event.target.id)[0].value =
      event.target.value;
    this.setState({ formContents: formContents });
  };

  handlerDelete = (event) => {
    const { id, token } = this.props;

    connectAPI("ad/" + id, "DELETE", false, token).then((item) => {
      this.handlerReset();
      this.handlerToggleForm(true, true);
    });
  };

  handlerSubmitForm = (event) => {
    event.preventDefault();
    let allRequiredFilled = true;
    let priceFormatValid = true;
    const { id, token, showeditbutton } = this.props;
    let data = {};
    let urlExtension;
    let method;

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
    data.title = data.title.substring(0, 79);

    if (allRequiredFilled) {
      if (priceFormatValid) {
        if (showeditbutton) {
          urlExtension = "ad/" + id;
          method = "PATCH";
        } else {
          urlExtension = token ? "user/me/ad" : "ad";
          method = "POST";
        }

        connectAPI(urlExtension, method, data, token).then((e) => {
          this.handlerReset();
          this.handlerFeedback(
            false,
            `Your ad has been successfully ${
              showeditbutton ? "edited" : "added"
            }!`,
            false,
            false,
            true
          );
        });
      } else {
        this.handlerFeedback(
          true,
          "Number is in a wrong format!",
          false,
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
    const {
      showaddbutton,
      showeditbutton,
      token,
      closingbehavior,
    } = this.props;

    const classname = error ? "is-danger" : "is-primary";
    const completed = error ? false : true;
    const label = showeditbutton ? "Edit your ad" : "Create your ad";

    if (this.state.Form)
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
                completed,
                completed
              )}
            />
          ) : null}

          <Form
            label={label}
            token={token}
            handlerSubmitForm={this.handlerSubmitForm}
            handlerFeedback={this.handlerFeedback}
            handlerReset={this.handlerReset}
            handlerChange={this.handlerChange}
            formcontents={this.state.formContents}
            closingbehavior={closingbehavior}
            handlerDelete={this.handlerDelete}
            editmode={showeditbutton}
          />
        </React.Fragment>
      );
    else if (showeditbutton)
      return (
        <button
          onClick={this.handlerToggleForm.bind(this, false, false)}
          type="button"
          className="button is-link is-small"
        >
          Edit
        </button>
      );
    else if (showaddbutton)
      return (
        <button
          className="button is-link"
          type="button"
          onClick={this.handlerToggleForm.bind(this, false, false)}
        >
          Add a New Ad
        </button>
      );
    else return null;
  }
}

export default FormControl;
