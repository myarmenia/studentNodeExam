import React from "react";
import './orderHistoryItem.css'
import { NavLink } from "react-router-dom";

const OrderHistoryItem = ({wine}) => {

  return (
    <div className="activeOrderItem">
      <NavLink to={`/products/${wine.wine_id._id}`} className="img_div">
        <img src={`${process.env.REACT_APP_HOST}${wine.wine_id.imageUrl}`} alt="" />
      </NavLink>
      <NavLink to={`/products/${wine.wine_id._id}`} className="activeOrderItem_name">
        <h4>{wine.wine_id.title}</h4>
        <p>
          Article <span> &nbsp;&nbsp; {wine.wine_id.article}</span>
        </p>
        <p>
          Country <span> &nbsp;&nbsp; {wine.wine_id.about.country}</span>
        </p>
      </NavLink>
      <div className="activeOrderItem_quantity">
        <p>Quantity</p>
        <p>{wine.count}</p>
      </div>
      <div className="activeOrderItem_total">
        <p>Price</p>
        <p>{wine.wine_id.price}$</p>
      </div>
    </div>
  );
};

export default React.memo(OrderHistoryItem)
