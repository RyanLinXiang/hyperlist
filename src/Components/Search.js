import React from "react";

class Search extends React.Component {
  handlerSubmit = (e) => {
    e.preventDefault();
    let keyWord = e.target.search.value;
    var searchRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [{ title: { like: keyWord, options: "i" } }],
      },
    };
    this.props.handler("default", searchRequest);
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
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
              <button
                type="submit"
                className="button is-link"
                id="search_submit"
              >
                Search
              </button>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
