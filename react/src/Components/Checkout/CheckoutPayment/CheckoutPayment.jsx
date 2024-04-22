import React, { useEffect, useState } from "react";
import "./checkoutPayment.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCheckout,
  getCartThunk,
} from "../../../Redux/Slices/Cart/cartThunks";
import { changeCart } from "../../../Redux/Slices/Cart/CartSlice";

const CheckoutPayment = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    const { payload } = await dispatch(cartCheckout());
    setMessage(payload.message);
    dispatch(getCartThunk());
  };

  return (
    <div className="ceckout_payment">
      <h3>Details</h3>

      <div className="payment_details">
        <div className="payment_details_item">
          <h5>Payment methods</h5>
          <div className="method_radios">
            <div className="method_radio_item">
              <input type="radio" name="cart" />
              <span>Visa</span>
            </div>
            <div className="method_radio_item">
              <input type="radio" name="cart" />
              <span>Master Card</span>
            </div>
            <div className="method_radio_item">
              <input type="radio" name="cart" />
              <span>PayPal</span>
            </div>
          </div>
        </div>

        <div className="payment_details_item payment_cart_namber">
          <h5>Card namber</h5>
          <div className="cart_namber">
            <input type="text" placeholder="0000" />
            <input type="text" placeholder="0000" />
            <input type="text" placeholder="0000" />
            <input type="text" placeholder="0000" />
          </div>
        </div>

        <div className="payment_details_item payment_name_item">
          <h5>Name on card</h5>
          <input type="text" placeholder="John Brown" />
        </div>

        <div className="payment_details_item payment_date_cvv">
          <div className="item_date">
            <h5>Expiration date</h5>
            <div className="item_date_inp">
              <input type="text" placeholder="Year" />
              <input type="text" placeholder="Month" />
            </div>
          </div>

          <div className="item_cvv">
            <h5>CVV/CVC</h5>
            <input type="text" placeholder="000" />
          </div>
        </div>

        <div className="payment_save">
          <input type="radio" />
          <span>Save this card?</span>
        </div>
      </div>

      <button onClick={handleCheckout}>Confirm</button>
      {message.length ? (
        <div
          className={
            message.toLowerCase().includes("were bought")
              ? "back_ok"
              : "back_err"
          }
        >
          {message}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(CheckoutPayment);
