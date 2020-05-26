import React from "react";
import connectAPI from "./api";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
    console.log(event.target.name);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password) {
      connectAPI("/user/register", "POST", this.state).then((e) => {
        console.log(e);
        this.props.handler(false, false, false); //Sicherheitsstufe
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
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
            <button type="submit" className="button is-primary">
              Register
            </button>{" "}
            <button
              className="button is-info"
              onClick={this.props.handler.bind(this, false, false, false)}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    );
  }
}
export default Register;
