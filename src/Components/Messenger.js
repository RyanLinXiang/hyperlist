import React from "react";
const Favorite = (props) => {
  const { handlerToggleFav, favcolor } = props;
  return (
    <button
      type="button"
      className={`favorite button is-small ${favcolor}`}
      onClick={handlerToggleFav}
    >
      <span role="img" aria-label="Messenger">
        &#9997;
      </span>
    </button>
  );
};

export default Favorite;
