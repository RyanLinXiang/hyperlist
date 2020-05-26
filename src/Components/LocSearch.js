import React from "react";
import connectAPI from "./api";


class LocSearch extends React.Component {

  handlerSubmit = (e) => {
    e.preventDefault()
    let keyWord = e.target.value
    var locationRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [
          { location: { like: keyWord, options: "i" } }


        ]
      }
    };


    this.props.handler("default", locationRequest)

  }




  render() {
    return (
      <div className="menu sticky">
        <div className="control">
          <input
            onChange={this.handlerSubmit}
            className="input is-radiusless"
            type="text"
            id="search_loc"
            placeholder="Find location"
          />
        </div>
      </div>
    );
  }
};

export default LocSearch;
