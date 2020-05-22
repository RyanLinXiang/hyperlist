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

  componentDidMount() {
    if (this.props.start) {
      const filterParam = encodeURIComponent(
        JSON.stringify({
          limit: 20,
        })
      );
      connectAPI("ad/?filter=" + filterParam, "GET").then((e) => {
        this.props.handler(e, true);
      });
    }
  }

  render() {
    let fullItem = this.state.fullItem ? this.state.fullItem : false;

    return (
      <React.Fragment>
        {this.props.items ? (
          this.props.items.map((e) => (
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
