import React from "react";
import Favorite from "./Favorite";
import FormControl from "./FormControl";
import Messenger from "./Messenger";

const Item = (props) => {
  const {
    id,
    adUserId,
    userid,
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
        {token ? (
          <React.Fragment>
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
            {userid !== adUserId ? (
              <Messenger id={id} adUserId={adUserId} />
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
