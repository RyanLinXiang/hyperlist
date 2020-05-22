import React from "react";

const AddItemButton = () => {
  return (
    <div className="box is-shadowless has-icons-right">
      <button
        className="button is-link"
        id="new_entry"
        data-target="modal-ter"
        aria-haspopup="true"
      >
        Add New Article
      </button>
    </div>
  );
};

export default AddItemButton;
