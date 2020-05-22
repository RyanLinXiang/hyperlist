import React from "react";
const FullItem = () => {
  return (
    <nav className="level" style="width:100%">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Loc</p>
          <p className="title">Location</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Price</p>
          <p className="title">Price</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Negotiable?</p>
          <p className="title">Yes/No</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Contact</p>
          <p className="title">
            <a href="mailto:Email">Contact</a>
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Days</p>
          <p className="title">Days Past</p>
        </div>
      </div>
    </nav>
  );
};

export default FullItem;
