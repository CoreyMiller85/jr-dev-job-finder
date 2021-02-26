import React from "react";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="header-main">
      <h1 className="logo">Job Finder</h1>
      <div
        className="hamburger"
        onClick={() => console.log("clicked hamburger menu")}
      >
        <i className="fas fa-bars"></i>
      </div>
      <ul className="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Header;
