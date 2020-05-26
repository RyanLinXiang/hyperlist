import React from "react";

class LocSearch extends React.Component {
  handlerChange = (e) => {
    let keyWord = e.target.value;
    var locationRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [{ location: { like: keyWord, options: "i" } }],
      },
    };

    this.props.handler("search", locationRequest);
  };

  render() {
    return (
      <div className="menu sticky">
        <div className="control">
          <input
            onChange={this.handlerChange}
            className="input is-radiusless"
            type="text"
            id="search_loc"
            placeholder="Find location"
          />
        </div>
      </div>
    );
  }
}

export default LocSearch;
