import React from "react";
import AddItem from "./Components/AddItem";
import AddItemButton from "./Components/AddItemButton";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FullItem from "./Components/FullItem";
import Items from "./Components/Items";
import LocSearch from "./Components/LocSearch";
import Modals from "./Components/Modals";
import Message from "./Components/Message";
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
                <AddItemButton />
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column is-narrow">
                <User token={this.state.token} handler={this.handlerUser} />
                <p>&nbsp;</p>
                <LocSearch handler={this.handlerShowItems} />
              </div>
              <div className="column">
                <Items
                  items={this.state.items}
                  handler={this.handlerShowItems}
                  start={this.start}
                  token={this.state.token}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <Modals token={this.state.token}>
          <Message />
          <FullItem />
          <AddItem />
        </Modals>
      </React.Fragment>
    );
  }
}

export default App;
