import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import Delete from "./Delete";

const Form = (props) => {
  const {
    label,
    token,
    formcontents,
    handlerSubmitForm,
    handlerFeedback,
    handlerReset,
    handlerChange,
    handlerDelete,
    closingbehavior,
  } = props;

  return (
    <form name="entry" onSubmit={handlerSubmitForm}>
      <div className="modal is-active" id="add_entry">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{label}</p>
            <button
              className="delete"
              id="close_add_entry"
              aria-label="close"
              onClick={handlerFeedback.bind(
                this,
                false,
                false,
                true,
                closingbehavior,
                false
              )}
            ></button>
          </header>

          <section className="modal-card-body">
            {formcontents.map((e) => {
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
                        value={e.value}
                        handlerChange={handlerChange}
                      />
                    );

                  case "textarea":
                    return (
                      <TextArea
                        id={e.id}
                        key={e.id}
                        label={e.label}
                        placeholder={e.placeholder}
                        value={e.value}
                        handlerChange={handlerChange}
                      />
                    );

                  case "checkbox":
                    return (
                      <CheckBox
                        id={e.id}
                        key={e.id}
                        label={e.label}
                        value={e.value}
                        handlerChange={handlerChange}
                      />
                    );

                  default:
                    return null;
                }
              } else return null;
            })}
          </section>

          <footer className="modal-card-foot">
            <button type="submit" className="button is-link">
              Submit
            </button>
            <button
              className="button"
              id="reset"
              type="button"
              onClick={handlerReset}
            >
              Reset
            </button>
            <Delete handler={handlerDelete} />
          </footer>
        </div>
      </div>
    </form>
  );
};

export default Form;
