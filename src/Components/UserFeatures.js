import React from "react";

const UserFeatures = (props) => {
  const { userid, username, handlerUser, handlerShowItems } = props;

  const handlerUserFeature = (feature) => {
    if (feature === "ads") {
      handlerShowItems("default", {
        limit: 20,
        where: { userId: userid },
      });
    } else if (feature === "favs") {
      handlerShowItems("myfavs", false);
    }
  };

  return (
    <div className="box">
      <div className="content">Welcome {username}!</div>
      <aside className="menu">
        <p className="menu-label">Personal features:</p>
        <ul className="menu-list">
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "ads")}>
              my Ads
            </a>
          </li>
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "favs")}>
              my Favorites
            </a>
          </li>
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "messages")}>
              my Messages
            </a>
          </li>
          <li>
            <ul>
              <li>Inbox</li>
              <li>Sent</li>
            </ul>
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
