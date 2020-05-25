import React from "react";
const Favorite = (props) => {
  const { handlerToggleFav, favcolor } = props;

  return (
    <button
      type="button"
      className={`favorite button is-small ${favcolor}`}
      onClick={handlerToggleFav}
    >
      &#9733;
    </button>
  );
};

export default Favorite;
