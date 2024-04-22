import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { DataNavBar } from "../../../Constants/constants";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../Search/Search";
import {
  changeUserPgaeCurrent,
  setActivPat,
} from "../../../Redux/Slices/Filter/FilterSlice";
import NavBar from "./NavBar/NavBar";
import { setSearchValue } from "../../../Redux/Slices/Products/ProductSlice";
import { getCartThunk } from "../../../Redux/Slices/Cart/cartThunks";
import { getAccessToken } from "../../../Utils/accontUtils";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [barIsOpen, setBarIsOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { cart, cartLength } = useSelector((state) => state.cartData);
  const { activPat } = useSelector((state) => state.filterData);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(getCartThunk());
    }
  }, []);

  const goToBrand = async (obj) => {
    if (obj.locationName === "support") {
      await dispatch(changeUserPgaeCurrent("support"));
      dispatch(setActivPat(obj));
    } else {
      dispatch(setActivPat(obj));
    }
  };

  const changeActivePath = () => {
    dispatch(setActivPat({ title: null, path: null, locationName: null }));
  };

  barIsOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <nav
      style={{
        position: location.pathname !== "/" ? "relative" : "fixed",
        boxShadow:
          location.pathname === "/" ? "none" : "0 7px 20px rgb(206, 206, 206)",
      }}
    >
      <div className="container">
        <div className="nav_menu">
          <div
            className="bar"
            onClick={() => setBarIsOpen(!barIsOpen)}
            style={{
              transform: isOpen
                ? "rotate3d(0, 1, 0, 90deg)"
                : "rotate3d(0,0,0,0deg)",
            }}
          >
            <i
              className="fa-solid fa-bars"
              style={{
                transform: barIsOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            ></i>
            <div
              className="bar_menu_div"
              style={{
                left: barIsOpen ? "-140%" : "-600px",
                backgroundColor:
                  location.pathname === "/"
                    ? "rgba(255, 255, 255, 0.603)"
                    : "white",
              }}
            >
              <NavBar />
            </div>
          </div>
          <div
            className="menu"
            style={{
              transform: isOpen
                ? "rotate3d(1, 0, 0, 180deg)"
                : "rotate3d(0,0,0,0deg)",
            }}
          >
            <ul>
              {DataNavBar.map((item) => (
                <li
                  key={item.id}
                  onClick={() => goToBrand(item)}
                  className={activPat.title === item.title ? "active_page" : ""}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="searchBox"
            style={{
              transform: isOpen
                ? "rotate3d(0,0,0,0deg)"
                : "rotate3d(1, 0, 0, -90deg)",
            }}
          >
            <Search />{" "}
            <i
              onClick={() => {
                setIsOpen(!isOpen);
                dispatch(setSearchValue(""));
              }}
              className="fa-solid fa-x"
            ></i>
          </div>
          <div className="navIcons">
            <span
              className="header_icon search_icon"
              onClick={() => {
                setIsOpen(!isOpen);
                dispatch(setSearchValue(""));
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 25.5C20.299 25.5 25 20.799 25 15C25 9.20101 20.299 4.5 14.5 4.5C8.70101 4.5 4 9.20101 4 15C4 20.799 8.70101 25.5 14.5 25.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.925 22.425L28 28.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <NavLink
              to={"/user/signin"}
              className="header_icon login_icon"
              onClick={() => changeActivePath()}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20.5C20.4183 20.5 24 16.9183 24 12.5C24 8.08172 20.4183 4.5 16 4.5C11.5817 4.5 8 8.08172 8 12.5C8 16.9183 11.5817 20.5 16 20.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M3.875 27.5C5.10367 25.3714 6.87104 23.6038 8.99944 22.3749C11.1278 21.1459 13.5423 20.4989 16 20.4989C18.4577 20.4989 20.8722 21.1459 23.0006 22.3749C25.129 23.6038 26.8963 25.3714 28.125 27.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>

            <NavLink
              to={"/cart"}
              className="header_icon cart_icon"
              onClick={() => changeActivePath()}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 23.5H8.725L5.2375 4.325C5.1967 4.09537 5.07691 3.88722 4.89887 3.73657C4.72082 3.58592 4.49572 3.50223 4.2625 3.5H2"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 28.5C11.3807 28.5 12.5 27.3807 12.5 26C12.5 24.6193 11.3807 23.5 10 23.5C8.61929 23.5 7.5 24.6193 7.5 26C7.5 27.3807 8.61929 28.5 10 28.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 28.5C24.3807 28.5 25.5 27.3807 25.5 26C25.5 24.6193 24.3807 23.5 23 23.5C21.6193 23.5 20.5 24.6193 20.5 26C20.5 27.3807 21.6193 28.5 23 28.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.8125 18.5H23.5125C23.98 18.5014 24.433 18.338 24.7919 18.0386C25.1508 17.7391 25.3927 17.3227 25.475 16.8625L27 8.5H6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ display: cartLength > 0 ? "flex" : "none" }}>
                {cartLength}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
