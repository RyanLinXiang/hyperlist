import React from "react";
import connectAPI from "./Components/api";
import FormControl from "./Components/FormControl";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Items from "./Components/Items";
import LocSearch from "./Components/LocSearch";
import Search from "./Components/Search";
import User from "./Components/User";

class App extends React.Component {
  state = {
    token: false,
    userid: false,
    username: false,
    items: false,
  };
  /*   state = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzg5YjgxYWRhOGIxMDA0NDg1NjdmZCIsIm5hbWUiOiJMaW4iLCJpYXQiOjE1OTAyMDUzNDksImV4cCI6MTU5MDgxMDE0OX0.pB3pwP2bbQ2Q7sRwu9TmhcPYRziZshvY07s4Yej7qs0",
    userid: "5ec89b81ada8b100448567fd",
    username: "Lin",
    items: false,
  }; */

  currentAPIView = "default";
  currentAPIHelperData = false;
  messageItems = false;

  handlerShowItems = (view, helperData) => {
    let extension;
    let type;
    let token = this.state.token;
    let data = false;
    this.messageItems = false;

    if (view === "current") {
      view = this.currentAPIView;
      helperData = this.currentAPIHelperData;
    }

    if (view === "default" || view === "ads" || view === "search") {
      extension =
        "ad/?filter=" + encodeURIComponent(JSON.stringify(helperData));
      type = "GET";
    } else if (view === "myfavs") {
      extension = "user/me/saved-ad";
      type = "GET";
    } else if (view === "messagesInbox" || view === "messagesSent") {
      extension = "user/me/conversations";
      type = "GET";
      this.messageItems = true;
    }

    connectAPI(extension, type, data, token).then((e) => {
      if (view === "messagesInbox")
        e = e.filter(
          (e) => e.latestMessage.recipientUserId === this.state.userid
        );
      else if (view === "messagesSent")
        e = e.filter((e) => e.latestMessage.senderUserId === this.state.userid);

      this.currentAPIView = view;
      this.currentAPIHelperData = helperData;
      this.setState({ items: e });
    });
  };

  handlerUser = (token, userid, username) => {
    this.setState({
      token: token,
      userid: userid,
      username: username,
      items: false,
    });
  };

  render() {
    const { token, userid, username, items } = this.state;

    if (!items.length && this.currentAPIView === "default") {
      this.handlerShowItems("default", {
        limit: 20,
      });
    }

    return (
      <React.Fragment>
        <Header
          handler={this.handlerShowItems.bind(this, "default", {
            limit: 20,
          })}
        />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <Search handler={this.handlerShowItems} />
              </div>
              <div className="column is-narrow">
                <div className="box is-shadowless has-icons-right">
                  <FormControl
                    handlerForRefreshHomepage={this.handlerShowItems.bind(
                      this,
                      "current",
                      this.currentAPIHelperData
                    )}
                    token={token}
                    showaddbutton={true}
                  />
                </div>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-narrow">
                <User
                  token={token}
                  userid={userid}
                  username={username}
                  handlerUser={this.handlerUser}
                  handlerShowItems={this.handlerShowItems}
                  currentAPIView={this.currentAPIView}
                />
                <p>&nbsp;</p>
                <LocSearch handler={this.handlerShowItems} />
              </div>
              <div className="column">
                <Items
                  items={items}
                  token={token}
                  userid={userid}
                  handlerForRefreshHomepage={this.handlerShowItems.bind(
                    this,
                    "current",
                    this.currentAPIHelperData
                  )}
                  messageItems={this.messageItems}
                  view={this.currentAPIView}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
