import React, { useEffect } from "react";
import "./checkoutPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import CheckoutPayment from "../../Components/Checkout/CheckoutPayment/CheckoutPayment";
import CheckoutProductItem from "../../Components/Checkout/CheckoutProductItem/CheckoutProductItem";
import { useDispatch, useSelector } from "react-redux";
import { UNKNOWN_ERROR } from "../../Constants/constants";
import { getCartThunk } from "../../Redux/Slices/Cart/cartThunks";
import { NavLink } from "react-router-dom";
import { setActivPat } from "../../Redux/Slices/Filter/FilterSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart, loadingStatus } = useSelector((state) => state.cartData);
  const tax = cart.totalCount * 0.25 || 0;

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  const changeActivePath = () => {
    dispatch(setActivPat({ title: null, path: null, locationName: null }));
  };

  return (
    <div className="checkoutPgae_div">
      <Nav />
      <div className="checkout_content">
        <div className="container">
          <div className="navigation">
            <NavLink to={"/"} onClick={() => changeActivePath()}>
              {"Home >"}{" "}
            </NavLink>
            <NavLink to={"/cart"}>{"Cart >"} </NavLink>
            <span className="lastSpan">Checkout </span>
          </div>

          <div className="checkout_main_div">
            <CheckoutPayment />

            <div className="checkout_all_cart_items">
              <div className="all_items_checkout">
                <div className="all_items_checkout_overflow">
                  {loadingStatus === "pending" ? (
                    <div>Loading .... </div>
                  ) : loadingStatus === "rejected" ? (
                    <div>{UNKNOWN_ERROR}</div>
                  ) : cart.items.length === 0 ? (
                    <div className="empty_cart">Cart Was Empty</div>
                  ) : (
                    cart.items.map((el) => <CheckoutProductItem wine={el} />)
                  )}
                </div>
              </div>
              <div className="ckeckout_total_amount">
                <div className="all_boughted_items">
                  {loadingStatus === "pending" ? (
                    <div>Loading .... </div>
                  ) : loadingStatus === "rejected" ? (
                    <div>{UNKNOWN_ERROR}</div>
                  ) : cart.items.length === 0 ? (
                    <div className="empty_cart">Cart Was Empty</div>
                  ) : (
                    cart.items.map((el) => (
                      <div className="item_price_div">
                        <p>{el.wine_id.title}</p>
                        <p>{el.wineTotalPrice}$</p>
                      </div>
                    ))
                  )}

                  <div className="item_price_div">
                    <p>TAX</p>
                    <p>{tax}$</p>
                  </div>
                </div>
                <div className="total_cart">
                  <h4>Total Amount</h4>
                  <h4>{cart.totalPrice}$</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
