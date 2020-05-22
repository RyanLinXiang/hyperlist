import React from "react";

const Search = () => {
  return (
    <div className="box is-shadowless">
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            className="input"
            id="search"
            type="text"
            placeholder="Find ads"
          />
        </p>
        <p className="control">
          <button className="button is-link" id="search_submit">
            Search
          </button>
        </p>
      </div>
    </div>
  );
};

export default Search;
