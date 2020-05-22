import React from "react";
import Register from "./Register";
import Login from "./Login";

class User extends React.Component {
  render() {
    const { token, handler } = this.props;

    if (token === "register") return <Register handler={handler} />;
    else if (token === false) return <Login handler={handler} />;
    else return <div>Du bist erfolgreich eingeloggt!</div>;
  }
}

export default User;
