import React from "react";
import Register from "./Register";
import Login from "./Login";
import UserFeatures from "./UserFeatures";

const User = (props) => {
  const {
    token,
    userid,
    username,
    handlerUser,
    handlerShowItems,
    currentAPIView,
  } = props;

  if (token === "register") return <Register handler={handlerUser} />;
  else if (token === false) return <Login handler={handlerUser} />;
  else
    return (
      <UserFeatures
        userid={userid}
        username={username}
        handlerUser={handlerUser}
        handlerShowItems={handlerShowItems}
        token={token}
        currentAPIView={currentAPIView}
      />
    );
};

export default User;
