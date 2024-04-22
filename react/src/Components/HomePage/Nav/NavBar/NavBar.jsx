import React from "react";
import "./navBar.css";
import { DataNavBar } from "../../../../Constants/constants.js";
import { NavLink } from "react-router-dom";
import {
  changeUserPgaeCurrent,
  setActivPat,
} from "../../../../Redux/Slices/Filter/FilterSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const { activPat } = useSelector((state) => state.filterData);

  const goToBrand = async (obj) => {
    if (obj.locationName === "support") {
      await dispatch(changeUserPgaeCurrent("support"));
      dispatch(setActivPat(obj));
    } else {
      dispatch(setActivPat(obj));
    }
  };

  return (
    <div className="nabBar_mainDiv">
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
  );
};

export default NavBar;
