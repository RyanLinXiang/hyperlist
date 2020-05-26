import React from "react";
import connectAPI from "./api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      connectAPI("/user/login", "POST", {
        email: e.target.email.value,
        password: e.target.password.value,
      }).then((e) => {
        connectAPI("/user/me", "GET", false, e.token).then((element) => {
          this.props.handler(e.token, element.id, element.name);
        });
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
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
              onClick={this.props.handler.bind(this, "register", false, false)}
            >
              Register
            </button>
          </p>
        </div>
      </form>
    );
  }
}
export default Login;
