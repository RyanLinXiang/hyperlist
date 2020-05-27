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
          onClick={handlerShowFull}
          className="button is-small"
          type="button"
        >
          read more
        </button>{" "}
        {token && token !== "register" ? (
          <React.Fragment>
            <Favorite handlerToggleFav={handlerToggleFav} favcolor={favcolor} />{" "}
            <FormControl
              id={id}
              handlerForRefreshHomepage={handlerForRefreshHomepage}
              showeditbutton={showeditbutton}
              token={token}
              closingbehavior={true}
            />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
