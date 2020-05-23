import React from "react";
const Header = (props) => {
  const { label, handler } = props;

  return (
    <header className="modal-card-head">
      <p className="modal-card-title">{label}</p>
      <button
        className="delete"
        id="close_add_entry"
        aria-label="close"
        onClick={handler}
      ></button>
    </header>
  );
};

export default Header;
