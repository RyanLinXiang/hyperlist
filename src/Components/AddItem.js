import React from "react";
const AddItem = () => {
  return (
    <div className="modal" id="add_entry">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add New Entry</p>
          <button
            className="delete"
            id="close_add_entry"
            aria-label="close"
          ></button>
        </header>

        <section className="modal-card-body">
          <form name="entry">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  id="title"
                  type="text"
                  placeholder="enter the title (max 80 characters long)"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  id="description"
                  placeholder="description"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  id="name"
                  type="text"
                  placeholder="enter your name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Location</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  id="loc"
                  type="text"
                  placeholder="enter your location"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  id="price"
                  type="text"
                  placeholder="price"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-euro-sign"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">Negotiable</label>
                <input type="checkbox" id="vb" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="name@maxmuster.com"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
          </form>
        </section>

        <footer className="modal-card-foot">
          <button type="submit" className="button is-link">
            Submit
          </button>
          <a className="button has-background-grey" id="reset">
            Reset
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AddItem;
