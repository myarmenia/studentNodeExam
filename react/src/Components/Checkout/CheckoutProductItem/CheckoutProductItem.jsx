import React from "react";
import "./checkoutProductItem.css";

const CheckoutProductItem = ({ wine }) => {
  return (
    <div className="checkout_product_item">
      <div className="img_div">
        <img
          src={`${process.env.REACT_APP_HOST}${wine.wine_id.imageUrl}`}
          alt=""
        />
      </div>
      <div className="checkout_product_item_info">
        <h3>{wine.wine_id.title}</h3>
        <p>
          Article <span> &nbsp; {wine.wine_id.article}</span>
        </p>
        <p>
          Country <span> &nbsp; {wine.wine_id.about.country}</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(CheckoutProductItem);
