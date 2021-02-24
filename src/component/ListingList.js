import React from "react";
import Listing from "./Listing";
import "../scss/ListingList.scss";

const ListingList = ({ data }) => {
  const listings = data.map((item) => {
    return (
      <Listing
        title={item.title}
        company={item.company}
        image={item.logo}
        location={item.location}
        jobType={item.jobType}
        desc={item.desc}
        link={item.link}
      />
    );
  });

  return <div className="listing-list">{listings}</div>;
};

export default ListingList;
