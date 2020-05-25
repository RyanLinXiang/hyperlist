import React from "react";
import Favorite from "./Favorite";
import FormControl from "./FormControl";
import Messenger from "./Messenger";
import dayspast from "./dayspast";

const FullItem = (props) => {
  const {
    id,
    userId,
    createdAt,
    title,
    description,
    name,
    location,
    email,
    price,
    priceNegotiable,
    handlerForRefreshHomepage,
    handlerForCloseFull,
    handlerToggleFav,
    favcolor,
    showeditbutton,
    showmessenger,
    token,
  } = props;

  return (
    <React.Fragment>
      <div className="modal is-active" id="itemfull">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              {title}{" "}
              <Favorite
                handlerToggleFav={handlerToggleFav}
                favcolor={favcolor}
              />
              <FormControl
                id={id}
                showeditbutton={showeditbutton}
                handlerForCloseFull={handlerForCloseFull}
                handlerForRefreshHomepage={handlerForRefreshHomepage}
                token={token}
                closingbehavior={false} // Don't close Edit Form if it was called from a Full Item Page
              />
            </div>
            <button
              className="delete"
              aria-label="close"
              onClick={handlerForCloseFull}
            ></button>
          </header>
          <section className="modal-card-body">
            <p className="subtitle">{description}</p>
            {showmessenger && userId ? ( // UserID only exists when the post has been posted by a logged in user
              <Messenger id={id} name={name} adUserId={userId} token={token} />
            ) : null}
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
                  <p className="title">{dayspast(createdAt)}</p>
                </div>
              </div>
            </nav>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullItem;
