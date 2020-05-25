import React from "react";
import connectAPI from "./api";

const UserFeatures = (props) => {
  const { userid, username, token, handlerUser, handlerShowItems } = props;

  const handlerUserFeature = (feature) => {
    if (feature === "ads") {
      const filterParam = encodeURIComponent(
        JSON.stringify({
          limit: 20,
          where: { userId: userid },
        })
      );
      connectAPI("ad/?filter=" + filterParam, "GET", false, token).then((e) => {
        handlerShowItems(e);
      });
    }
    if (feature === "favs") {
      connectAPI("user/me/saved-ad", "GET", false, token).then((e) => {
        handlerShowItems(e);
      });
    }
  };

  return (
    <div className="box">
      <div className="content">Wilkommen {username}!</div>
      <aside className="menu">
        <p className="menu-label">Persönliche Features:</p>
        <ul className="menu-list">
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "ads")}>
              Meine Anzeigen
            </a>
          </li>
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "favs")}>
              Meine Merkliste
            </a>
          </li>
          <li>
            <a href="# " onClick={handlerUserFeature.bind(this, "messages")}>
              Meine Nachrichten
            </a>
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
