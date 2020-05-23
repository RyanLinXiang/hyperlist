import React from "react";
import connectAPI from "./api";
import Register from "./Register";
import Login from "./Login";
import UserFeatures from "./UserFeatures";

class User extends React.Component {
  state = { name: false };

  render() {
    const { token, handlerUser, handlerShowItems } = this.props;

    connectAPI("user/me", "GET", false, token).then((e) => {
      this.setState({ name: e.name });
    });

    if (token === "register") return <Register handler={handlerUser} />;
    else if (token === false) return <Login handler={handlerUser} />;
    else
      return (
        <UserFeatures
          name={this.state.name}
          handlerUser={handlerUser}
          handlerShowItems={handlerShowItems}
        />
      );
  }
}

export default User;
