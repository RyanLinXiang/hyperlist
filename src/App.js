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
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzg5YjgxYWRhOGIxMDA0NDg1NjdmZCIsIm5hbWUiOiJMaW4iLCJpYXQiOjE1OTAyMDUzNDksImV4cCI6MTU5MDgxMDE0OX0.pB3pwP2bbQ2Q7sRwu9TmhcPYRziZshvY07s4Yej7qs0",
    userid: "5ec89b81ada8b100448567fd",
    username: "Lin",
    items: false,
  };

  handlerShowItems = (items) => {
    this.setState({ items: items });
  };

  handlerUser = (token, userid, username) => {
    this.setState({ token: token, userid: userid, username: username });
  };

  render() {
    const { token, userid, username, items } = this.state;

    if (!items.length) {
      const filterParam = encodeURIComponent(
        JSON.stringify({
          limit: 20,
        })
      );
      connectAPI("ad/?filter=" + filterParam, "GET").then((e) => {
        this.handlerShowItems(e);
      });
    }

    return (
      <React.Fragment>
        <Header />
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
                      false
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
                    false
                  )}
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
