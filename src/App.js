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
  state = { token: false, items: false };
  start = true;

  handlerShowItems = (items, start) => {
    this.setState({ items: items });
    this.start = start;
  };

  handlerUser = (token) => {
    this.setState({ token: token });
  };

  render() {
    if (!this.state.items.length && this.start) {
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
                <AddItem handler={this.handlerShowItems} />
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-narrow">
                <User token={this.state.token} handler={this.handlerUser} />
                <p>&nbsp;</p>
                <LocSearch handler={this.handlerShowItems} />
              </div>
              <div className="column">
                <Items items={this.state.items} token={this.state.token} />
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
