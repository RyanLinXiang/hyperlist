import React from "react";
import Favorite from "./Favorite";
import FormControl from "./FormControl";

const Item = (props) => {
  const {
    id,
    title,
    description,
    handlerShowFull,
    handlerToggleFav,
    handlerForRefreshHomepage,
    favcolor,
    showeditbutton,
    token,
  } = props;

  return (
    <div className="box">
      <p className="title is-4">{title}</p>
      <div className="subtitle">
        {description + " ... "}
        <button
          onClick={handlerShowFull.bind(this, id, false)}
          className="button is-small"
          type="button"
        >
          read more
        </button>

        <Favorite
          handlerToggleFav={handlerToggleFav.bind(this, id)}
          favcolor={favcolor}
        />

        <FormControl
          id={id}
          handlerForRefreshHomepage={handlerForRefreshHomepage}
          showeditbutton={showeditbutton}
          token={token}
          closingbehavior={true}
        />
      </div>
    </div>
  );
};

export default Item;
