import React from "react";

const Search =(props)=> {
  var handlerSubmit = (e) => {
    e.preventDefault();
    let keyWord = e.target.search.value;
    var searchRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [{ title: { like: keyWord, options: "i" } }
      ]
      },
    };
    props.handler("search", searchRequest);
  };

  
    return (
      <form onSubmit={handlerSubmit}>
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


export default Search;
