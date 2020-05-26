import React from "react";
import connectAPI from "./api";

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      connectAPI("/user/login", "POST", {
        email: e.target.email.value,
        password: e.target.password.value,
      }).then((e) => {
        connectAPI("/user/me", "GET", false, e.token).then((element) => { 
          props.handler(e.token, element.id, element.name);
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
          />
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
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"

          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button type="submit" className="button is-info">
            Login
            </button>{" "}
          <button
            className="button is-primary"
            onClick={props.handler.bind(this, "register", false, false)}
          >
            Register
            </button>
        </p>
      </div>
    </form>
  );

}

export default Login;
