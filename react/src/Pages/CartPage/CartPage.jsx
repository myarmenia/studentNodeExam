import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import Title from "../../Components/HomePage/Title/Title";
import ProductsSlider from "../../Components/ProductsSlider/ProductsSlider";
import Footer from "../../Components/Footer/Footer";
import CartProductItem from "../../Components/CartProductItem/CartProductItem";
import { NavLink } from "react-router-dom";
import requireAuth from "../../HOC/requireAuth";
import { getCartThunk } from "../../Redux/Slices/Cart/cartThunks";
import { UNKNOWN_ERROR } from "../../Constants/constants";
import { setActivPat } from "../../Redux/Slices/Filter/FilterSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { wines } = useSelector((state) => state.productsData);
  const { cart,loadingStatus } = useSelector((state) => state.cartData);

  const changeActivePath = ()=>{
    dispatch(setActivPat({title: null,
    path: null,
    locationName: null}))
  }

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  return (
    <div className="cartPage_div">
      <Nav />
      <div className="cartPage_content">
        <div className="container">
          <div className="navigation">
            <NavLink to={'/'} onClick={()=>changeActivePath()}>{"Home >"} </NavLink> 
            <span>Cart </span>
          </div>
          <div className="cart_all_items">
            <div className="all_titles">
              <h3>Your Order</h3>
              <h4>Product name</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
              <h4>Edit</h4>
            </div>
            <div className="all_items">
              {loadingStatus === "pending" ? <div className="cart_loading">Loading .... </div> : loadingStatus === "rejected" ? (
                <div>{UNKNOWN_ERROR}</div>
              ) : cart ? cart.items.length === 0 ? (
                <div className="empty_cart">Cart Was Empty</div>
              ) : 
                cart.items.map((el) => <CartProductItem wine={el} key={el._id} />)
              : <div className="empty_cart">Cart Is Empty</div>
            }
            </div>
            <div className="all_totals">
              <div className="all_total_quantity">
                <p>Total quantity {cart ? cart.totalCount : 0}</p>
              </div>
              <div className="all_total_amount">
                <p>Total Amount {cart ?cart.totalPrice: 0}$</p>
              </div>
            </div>
            <div className="cart_search">
              <p>Search</p>
              <div className="search_checkout">
                <div className="search_article">
                  <input type="text" placeholder="Article" />
                  <button>Submit</button>
                </div>
                <div className="checkout_cart">
                  <NavLink to={"/cart/checkout"}>Checkout</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <Title title={"You may love"} />
        <ProductsSlider datas={wines} />
      </div>
      <Footer />
    </div>
  );
};

export default requireAuth(CartPage);
