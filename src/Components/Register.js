import React from "react";

const Register = (props) => {
  return (
    <form>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button type="submit" className="button is-primary">
            Register
          </button>{" "}
          <button
            className="button is-info"
            onClick={props.handler.bind(this, false)}
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

export default Register;
