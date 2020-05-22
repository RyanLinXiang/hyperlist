import React from "react";
import connectAPI from "./api";
import Item from "./Item";

class Items extends React.Component {
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
    return (
      <React.Fragment>
        {this.props.items ? (
          this.props.items.map((e) => (
            <Item
              key={e.id}
              title={e.title}
              desc={e.description.substring(0, 99)}
            />
          ))
        ) : (
          <Item />
        )}
      </React.Fragment>
    );
  }
}

export default Items;
