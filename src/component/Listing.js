import React from "react";
import "../scss/Listing.scss";

const Listing = ({ title, company, image, location, jobType, desc, link }) => {
  return (
    <div className="listing-main">
      <div className="logo-box">
        {image ? <img className="logo-img" src={image} alt={title} /> : null}
      </div>
      <div className="text-box">
        <h3 className="title">{title}</h3>
        <span>{company}</span>
        <span> | </span>
        <span>{location}</span>
        <span> | </span>
        <span>{jobType}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Listing;
