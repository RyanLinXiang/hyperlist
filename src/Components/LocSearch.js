import React from "react";

const LocSearch = () => {
  return (
    <div className="menu sticky">
      <div className="control">
        <input
          className="input is-radiusless"
          type="text"
          id="search_loc"
          placeholder="Find location"
        />
        <ul id="matches"> </ul>
      </div>
    </div>
  );
};

export default LocSearch;
