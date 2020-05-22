import React from "react";
const Header = () => {
  return (
    <section
      className="hero is-link"
      style={{
        backgroundImage: `url(${"https://www.perpetuum.eu/sites/perpetuum.eu/files/styles/xxl/public/uploads/blog/slike/2017-12/b2bshop%20naslovna.jpg?itok=H0lminoI"})`,
        opacity: 0.8,
        backgroundPosition: "0% 25%",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <a href="">HyperList</a>
          </h1>
          <br />
          <h2 className="subtitle">by Osama | Ricky | Lin</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
