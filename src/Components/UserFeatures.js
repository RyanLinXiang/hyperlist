import React from "react";

const UserFeatures = (props) => {
  const { name, token, handlerUser, handlerShowItems } = props;

  return (
    <div className="box">
      <div className="content">Wilkommen {name}!</div>
      <aside className="menu">
        <p className="menu-label">Persönliche Features:</p>
        <ul className="menu-list">
          <li>
            <a>Meine Anzeigen</a>
          </li>
          <li>
            <a>Meine Merkliste</a>
          </li>
          <li>
            <a>Meine Nachrichten</a>
          </li>
        </ul>
        <p>&nbsp;</p>
        <p className="has-text-centered">
          <button
            className="button is-small has-background-grey"
            id="logout"
            type="button"
            onClick={handlerUser.bind(this, false)}
          >
            Logout
          </button>
        </p>
      </aside>
    </div>
  );
};

export default UserFeatures;
