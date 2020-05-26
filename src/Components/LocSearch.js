import React from "react";

const LocSearch =(props)=> {
  var handlerChange = (e) => {
    let keyWord = e.target.value;
    var locationRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [{ location: { like: keyWord, options: "i" } }],
      },
    };

    props.handler("search", locationRequest);
  };

  
    return (
      <div className="menu sticky">
        <div className="control">
          <input
            onChange={handlerChange}
            className="input is-radiusless"
            type="text"
            id="search_loc"
            placeholder="Find location"
          />
        </div>
      </div>
    );
  }


export default LocSearch;
