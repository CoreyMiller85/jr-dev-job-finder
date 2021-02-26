import React from "react";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="header-main">
      <h1>Job Finder</h1>
      <ul className="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Header;
