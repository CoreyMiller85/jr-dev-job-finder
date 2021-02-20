import React from "react";
import "../scss/Listing.scss";

const Listing = ({ title, company, image, location, jobType, desc, link }) => {
  return (
    <div className="listing-main">
      <h3>{title}</h3>
      <p>{company}</p>
      <img src={image} alt={title} />
      <p>{location}</p>
      <p>{jobType}</p>
      <p>{desc}</p>
      <a href={link} target="blank_">
        Read More...
      </a>
    </div>
  );
};

export default Listing;
