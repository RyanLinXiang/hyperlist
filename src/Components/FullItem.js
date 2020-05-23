import React from "react";
const FullItem = (props) => {
  const {
    createdAt,
    title,
    description,
    name,
    location,
    email,
    price,
    priceNegotiable,
    handler,
  } = props;

  const dayspast = Math.round(
    Math.abs((Date.now() - Date.parse(createdAt)) / (24 * 60 * 60 * 1000))
  );

  return (
    <div className="modal is-active" id="itemfull">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handler.bind(this, false)}
          ></button>
        </header>
        <section className="modal-card-body">
          <p className="subtitle">{description}</p>
        </section>
        <footer className="modal-card-foot">
          <nav className="level" style={{ width: "100%" }}>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Loc</p>
                <p className="title">{location}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Price</p>
                <p className="title">{price ? price : "n/a"}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Negotiable?</p>
                <p className="title">{priceNegotiable ? "yes" : "no"}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Contact</p>
                <p className="title">
                  <a href={"mailto:" + email}>{name}</a>
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Days</p>
                <p className="title">{dayspast}</p>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default FullItem;
