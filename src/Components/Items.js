import React from "react";
import connectAPI from "./api";
import Item from "./Item";
import FullItem from "./FullItem";

class Items extends React.Component {
  state = { fullItem: false };

  handlerShowFull = (id) => {
    if (id)
      connectAPI("ad/" + id, "GET").then((e) => {
        this.setState({ fullItem: e });
      });
    else this.setState({ fullItem: false });
  };

  render() {
    const items = this.props.items;
    let fullItem = this.state.fullItem ? this.state.fullItem : false;

    return (
      <React.Fragment>
        {items ? (
          items.map((e) => (
            <Item
              key={e.id}
              id={e.id}
              title={e.title}
              desc={e.description.substring(0, 99)}
              handler={this.handlerShowFull}
            />
          ))
        ) : (
          <Item />
        )}
        {fullItem ? (
          <FullItem {...fullItem} handler={this.handlerShowFull} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Items;
