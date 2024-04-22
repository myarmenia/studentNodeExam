import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./accountPage.css";
import Nav from "../../Components/HomePage/Nav/Nav";
import AccountBar from "../../Components/Account/AccountBar/AccountBar";
import ActiveOrders from "../../Components/Account/ActiveOrders/ActiveOrders";
import EditAccount from "../../Components/Account/EditAccount/EditAccount";
import OrderHistory from "../../Components/Account/OrderHistory/OrderHistory";
import Support from "../../Components/Account/Support/Support";
import Payment from "../../Components/Account/Payment/Payment";
import requireAuth from "../../HOC/requireAuth";
import { getUserThunk } from "../../Redux/Slices/User/userThunks";
import { changeUserPgaeCurrent } from "../../Redux/Slices/Filter/FilterSlice";
import { setBarIsOpen } from "../../Redux/Slices/User/UserSlice";

const AccountPage = () => {
  const { userPageCurrent, activPat } = useSelector(
    (state) => state.filterData
  );
  const { user, barIsOpen } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activPat.title === "support") {
      dispatch(changeUserPgaeCurrent("support"));
    }
    dispatch(getUserThunk());
  }, []);

  barIsOpen === true
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <div className="accountPage">
      <Nav />
      <div className="container">
        <div className="acoount_user_tab">
          <div className="user_info">
            <div className="user_img"></div>
            <div
              className="user_name"
              onClick={() => dispatch(setBarIsOpen(!barIsOpen))}
            >
              <h4>{user.name}</h4>
              <h5>{userPageCurrent}</h5>
              <i
                class="fa-solid fa-angles-right"
                style={{
                  transform: barIsOpen ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              ></i>
            </div>
          </div>
        </div>
        <div
          className="account_bar_div"
          style={{ left: barIsOpen ? "2px" : "-1000px" }}
        >
          <AccountBar user={user} />
        </div>

        {userPageCurrent === "account" && <EditAccount />}
        {userPageCurrent === "activeOrders" && <ActiveOrders user={user} />}
        {userPageCurrent === "orderHistory" && <OrderHistory user={user} />}
        {userPageCurrent === "payment" && <Payment />}
        {userPageCurrent === "support" && <Support />}
      </div>
    </div>
  );
};

export default requireAuth(AccountPage);
