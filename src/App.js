import React from "react";
import connectAPI from "./Components/api";
import AddItem from "./Components/AddItem";
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
    items: false,
  };
  start = true;

  handlerShowItems = (items, start) => {
    this.setState({ items: items });
    this.start = start;
  };

  handlerUser = (token) => {
    this.setState({ token: token });
  };

  render() {
    const { items, token } = this.state;

    if (!items.length && this.start) {
      const filterParam = encodeURIComponent(
        JSON.stringify({
          limit: 20,
        })
      );
      connectAPI("ad/?filter=" + filterParam, "GET").then((e) => {
        this.handlerShowItems(e, true);
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
                <AddItem handler={this.handlerShowItems} token={token} />
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-narrow">
                <User
                  token={token}
                  handlerUser={this.handlerUser}
                  handlerShowItems={this.handlerShowItems}
                />
                <p>&nbsp;</p>
                <LocSearch handler={this.handlerShowItems} />
              </div>
              <div className="column">
                <Items items={items} token={token} />
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
