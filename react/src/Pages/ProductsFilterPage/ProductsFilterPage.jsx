import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./productsFilterPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import Filters from "../../Components/Filters/Filters";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { UNKNOWN_ERROR } from "../../Constants/constants";
import { NavLink } from "react-router-dom";
import {
  setActivPat,
  setFilterIsOpen,
} from "../../Redux/Slices/Filter/FilterSlice";
import filterImg from "../../Images/Icons/filter.png";

const ProductsFilterPage = () => {
  const { filteredProducts, priceValueFrom, priceValueTo, filterIsOpen } =
    useSelector((state) => state.filterData);
  const { wines } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();
  const filterDivRef = useRef(null);

  const newProducts =
    filteredProducts.data.length && priceValueFrom >= 0 && priceValueTo > 0
      ? filteredProducts.data.filter(
          (el) =>
            parseInt(el.price) > parseInt(priceValueFrom) &&
            parseInt(el.price) < parseInt(priceValueTo)
        )
      : wines;

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  const changeActivePath = () => {
    dispatch(setActivPat({ title: null, path: null, locationName: null }));
  };
  filterIsOpen === true
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <div className="products_filter_page">
      <Nav />
      <div className="container products_container">
        <div className="navigation">
          <NavLink to={"/"} onClick={() => changeActivePath()}>
            {"Home >"}{" "}
          </NavLink>{" "}
          <span>Prodcuts</span>
        </div>
        <div className="products_filter_content">
          <div className="products_filter_icon" ref={filterDivRef}>
            <img
              src={filterImg}
              alt=""
              onClick={() => dispatch(setFilterIsOpen(!filterIsOpen))}
              style={{
                transform: filterIsOpen
                  ? "rotate3d(0, 1, 0, 180deg)"
                  : "rotate3d(0,0,0,0deg)",
              }}
            />
            <div
              className="products_filter_bar"
              style={{ display: filterIsOpen ? "flex" : "none" }}
            >
              <Filters isBtn={true} />
            </div>
          </div>
          <div className="products_filters">
            <Filters />
          </div>

          <div className="products_items">
            {filteredProducts.data.length ? (
              newProducts.map((el) => (
                <div className="wine_item_div" key={el._id}>
                  {" "}
                  <ProductItem wine={el} />
                </div>
              ))
            ) : filteredProducts.message ? (
              <div className="err_div">{filteredProducts.message}&#128546;</div>
            ) : (
              <div className="err_div">{UNKNOWN_ERROR}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilterPage;
