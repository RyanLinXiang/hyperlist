import React from "react";

const UserFeatures = (props) => {
  const {
    userid,
    username,
    handlerUser,
    handlerShowItems,
    currentAPIView,
  } = props;

  const handlerUserFeature = (feature) => {
    if (feature === "ads" || feature === "default") {
      handlerShowItems("ads", {
        limit: 20,
        where: { userId: userid },
      });
    } else if (feature === "myfavs") {
      handlerShowItems("myfavs", false);
    } else if (feature === "messagesInbox") {
      handlerShowItems("messagesInbox", false);
    } else if (feature === "messagesSent") {
      handlerShowItems("messagesSent", false);
    }
  };

  const handlerLogout = () => {
    handlerUser(false, false, false);
    handlerUserFeature("default");
  };

  return (
    <div className="box">
      <div className="content">Welcome {username}!</div>
      <aside className="menu">
        <p className="menu-label">Personal views:</p>
        <ul className="menu-list">
          <li>
            <a
              href="# "
              className={currentAPIView === "ads" ? "is-active" : null}
              onClick={handlerUserFeature.bind(this, "ads")}
            >
              my Ads
            </a>
          </li>
          <li>
            <a
              href="# "
              className={currentAPIView === "myfavs" ? "is-active" : null}
              onClick={handlerUserFeature.bind(this, "myfavs")}
            >
              my Favorites
            </a>
          </li>
        </ul>
        <p className="menu-label">my Messages:</p>
        <ul className="menu-list">
          <li>
            <a
              className={
                currentAPIView === "messagesInbox" ? "is-active" : null
              }
              href="# "
              onClick={handlerUserFeature.bind(this, "messagesInbox")}
            >
              Inbox
            </a>
          </li>
          <li>
            <a
              className={currentAPIView === "messagesSent" ? "is-active" : null}
              href="# "
              onClick={handlerUserFeature.bind(this, "messagesSent")}
            >
              Sent
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>
        <p className="has-text-centered">
          <button
            className="button is-small has-background-grey"
            id="logout"
            type="button"
            onClick={handlerLogout}
          >
            Logout
          </button>
        </p>
      </aside>
    </div>
  );
};

export default UserFeatures;
