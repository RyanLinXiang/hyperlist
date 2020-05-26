import React from "react";
import connectAPI from "./api";

const Register = (props) => {

  const handleSubmit = (e) => {
    alert('A name was submitted: ', e.target.name.value);
    e.preventDefault();
    if (e.target.name.value && e.target.email.value && e.target.password.value) {

    connectAPI('/user/register', 'POST', {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }).then((e) => {
      console.log(e)
      props.handler(false,false,false) //Sicherheitsstufe
    });
  }};

    return (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" name='name' />
          </div>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" name='email' />
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
            <input className="input" type="password" placeholder="Password" name='password' />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-primary" >
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
  }
export default Register;
