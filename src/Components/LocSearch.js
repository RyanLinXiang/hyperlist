import React from "react";

<<<<<<< HEAD

class LocSearch extends React.Component {

  handlerSubmit = (e) => {
    e.preventDefault()
    let keyWord = e.target.value
=======
const LocSearch =(props)=> {
  var handlerChange = (e) => {
    let keyWord = e.target.value;
>>>>>>> master
    var locationRequest = {
      limit: 20,
      offset: 0,
      where: {
        and: [{ location: { like: keyWord, options: "i" } }],
      },
    };

    props.handler("search", locationRequest);
  };

<<<<<<< HEAD
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
=======
  
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

>>>>>>> master

export default LocSearch;
