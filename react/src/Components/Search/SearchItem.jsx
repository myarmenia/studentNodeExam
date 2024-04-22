import React from "react";
import "./search.css";
import { NavLink } from "react-router-dom";

const SearchItem = ({ wine }) => {
  return (
    <NavLink className="search_item_div">
      <div className="img_div">
        <img src={`${process.env.REACT_APP_HOST}${wine.imageUrl}`} alt="" />
      </div>
      <div className="info">
        <h4>{wine.title}</h4>
        <p>{wine.price}$</p>
      </div>
    </NavLink>
  );
};

export default SearchItem;
