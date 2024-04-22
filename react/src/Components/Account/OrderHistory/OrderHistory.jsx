import React, { useEffect } from "react";
import "./orderHistory.css";
import { useDispatch, useSelector } from "react-redux";
import OrderHistoryItem from "./OrderHistoryItem/OrderHistoryItem";
import { getBoughtItems } from "../../../Redux/Slices/Cart/cartThunks";
import AccountCartLoading from "../../Loadings/AccountCartLoading";
import { UNKNOWN_ERROR } from "../../../Constants/constants";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { orderHistory } = useSelector((state) => state.cartData);

  useEffect(() => {
    dispatch(getBoughtItems());
  }, []);

  return (
    <div className="order_history">
      <h2>Order History</h2>
      <div className="all_titles">
        <h3>Your Order</h3>
        <h4>Product name</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
      </div>
      <div className="all_order_history">
        {orderHistory.loadingStatus === "pending" ? (
          <AccountCartLoading />
        ) : orderHistory.loadingStatus === "rejected" ? (
          <div>{UNKNOWN_ERROR}</div>
        ) : orderHistory.loadingStatus === "fulfilled" && orderHistory.data ? (
          orderHistory.data.boughtItems.length === 0 ? (
            <div className="empty_cart">Order History Was Empty</div>
          ) : (
            orderHistory.data.boughtItems.map((el) => (
              <OrderHistoryItem wine={el} key={el._id} />
            ))
          )
        ) : (
          <div className="empty_cart">Order History Was Empty</div>
        )}
      </div>
      <div className="order_history_total">
        <div className="all_total_quantity">
          <p>
            Total quantity{" "}
            {orderHistory.data ? orderHistory.data.totalCount : 0}
          </p>
        </div>
        <div className="all_total_spent">
          <p>
            Total Spent {orderHistory.data ? orderHistory.data.totalSpent : 0}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderHistory);
