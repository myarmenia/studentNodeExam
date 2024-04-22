import React from "react";
import "./accountBar.css";
import {useDispatch, useSelector} from "react-redux"
import { changeUserPgaeCurrent } from "../../../Redux/Slices/Filter/FilterSlice";
import { getRefreshToken, signOut } from "../../../Utils/accontUtils";
import { signOutThunk } from "../../../Redux/Slices/Auth/authThunks";
import { setBarIsOpen } from "../../../Redux/Slices/User/UserSlice";

const AccountBar = ({user}) => {
  const dispatch = useDispatch()
  const {userPageCurrent} = useSelector((state)=> state.filterData)
  const {barIsOpen} = useSelector((state)=>state.userData)

  const userSignOut = async ()=>{
    const refresh_token = getRefreshToken()

    if(refresh_token){
      const {payload} = await dispatch(signOutThunk({refresh_token}))
      signOut()
    }
  }

  const changeCurrent = (name)=>{
    dispatch(changeUserPgaeCurrent(name))
    dispatch(setBarIsOpen(false))
  }

  return (
    <div className="accountBar">
      <div className="user_info">
        <div className="user_img"></div>
        <div className="user_name">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="account_items">
        <div className={`account_item  ${userPageCurrent=== "account"? "active_page":""}`} onClick={()=>changeCurrent("account")}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 13.75C14.0376 13.75 16.5 11.2876 16.5 8.25C16.5 5.21243 14.0376 2.75 11 2.75C7.96243 2.75 5.5 5.21243 5.5 8.25C5.5 11.2876 7.96243 13.75 11 13.75Z"
              stroke="black"
              strokeMiterlimit="10"
            />
            <path
              d="M2.66406 18.5625C3.50877 17.0991 4.72384 15.8839 6.18712 15.039C7.65039 14.1941 9.31031 13.7492 11 13.7492C12.6897 13.7492 14.3496 14.1941 15.8129 15.039C17.2762 15.8839 18.4912 17.0991 19.3359 18.5625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Account</p>
        </div>
        <div className={`account_item  ${userPageCurrent=== "activeOrders"? "active_page":""}`} onClick={()=> changeCurrent("activeOrders")}>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.25 1H1.75C1.33579 1 1 1.33579 1 1.75V15.25C1 15.6642 1.33579 16 1.75 16H18.25C18.6642 16 19 15.6642 19 15.25V1.75C19 1.33579 18.6642 1 18.25 1Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.125 5.5H14.875"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.125 8.5H14.875"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.125 11.5H14.875"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Active orders</p>
        </div>
        <div className={`account_item  ${userPageCurrent=== "orderHistory"? "active_page":""}`}
        onClick={()=>changeCurrent("orderHistory")}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9688 10.0625V18.0496C17.9688 18.2188 17.9015 18.381 17.7819 18.5007C17.6623 18.6203 17.5 18.6875 17.3309 18.6875H3.59375C3.40313 18.6875 3.22031 18.6118 3.08552 18.477C2.95073 18.3422 2.875 18.1594 2.875 17.9688V7.90625C2.875 7.71563 2.95073 7.53281 3.08552 7.39802C3.22031 7.26323 3.40313 7.1875 3.59375 7.1875H7.66367C7.81908 7.18814 7.97021 7.23851 8.09492 7.33125L10.5926 9.2C10.7173 9.29274 10.8684 9.34311 11.0238 9.34375H17.25C17.4406 9.34375 17.6234 9.41948 17.7582 9.55427C17.893 9.68906 17.9688 9.87188 17.9688 10.0625Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9688 10.0625V18.0496C17.9688 18.2188 17.9015 18.381 17.7819 18.5007C17.6623 18.6203 17.5 18.6875 17.3309 18.6875H3.59375C3.40313 18.6875 3.22031 18.6118 3.08552 18.477C2.95073 18.3422 2.875 18.1594 2.875 17.9688V7.90625C2.875 7.71563 2.95073 7.53281 3.08552 7.39802C3.22031 7.26323 3.40313 7.1875 3.59375 7.1875H7.66367C7.81908 7.18814 7.97021 7.23851 8.09492 7.33125L10.5926 9.2C10.7173 9.29274 10.8684 9.34311 11.0238 9.34375H17.25C17.4406 9.34375 17.6234 9.41948 17.7582 9.55427C17.893 9.68906 17.9688 9.87188 17.9688 10.0625Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.75 7.1875V5.03125C5.75 4.84063 5.82573 4.65781 5.96052 4.52302C6.09531 4.38823 6.27813 4.3125 6.46875 4.3125H10.5387C10.6941 4.31314 10.8452 4.36351 10.9699 4.45625L13.4676 6.325C13.5923 6.41774 13.7434 6.46811 13.8988 6.46875H20.125C20.3156 6.46875 20.4984 6.54448 20.6332 6.67927C20.768 6.81406 20.8438 6.99688 20.8438 7.1875V15.1746C20.8438 15.3438 20.7765 15.506 20.6569 15.6257C20.5373 15.7453 20.375 15.8125 20.2059 15.8125H17.9688"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Order history</p>
        </div>
        <div className={`account_item  ${userPageCurrent=== "payment"? "active_page":""}`} onClick={()=>changeCurrent("payment")}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.59375 5.75V17.25C3.59375 17.6312 3.7452 17.9969 4.01478 18.2665C4.28437 18.536 4.65 18.6875 5.03125 18.6875H19.4062C19.5969 18.6875 19.7797 18.6118 19.9145 18.477C20.0493 18.3422 20.125 18.1594 20.125 17.9688V7.90625C20.125 7.71563 20.0493 7.53281 19.9145 7.39802C19.7797 7.26323 19.5969 7.1875 19.4062 7.1875H5.03125C4.65 7.1875 4.28437 7.03605 4.01478 6.76647C3.7452 6.49688 3.59375 6.13125 3.59375 5.75ZM3.59375 5.75C3.59375 5.36875 3.7452 5.00312 4.01478 4.73353C4.28437 4.46395 4.65 4.3125 5.03125 4.3125H17.25"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1719 14.0156C16.7673 14.0156 17.25 13.5329 17.25 12.9375C17.25 12.3421 16.7673 11.8594 16.1719 11.8594C15.5764 11.8594 15.0938 12.3421 15.0938 12.9375C15.0938 13.5329 15.5764 14.0156 16.1719 14.0156Z"
              fill="black"
            />
          </svg>
          <p>Payment</p>
        </div>
        <div className={`account_item  ${userPageCurrent=== "support"? "active_page":""}`} onClick={()=>changeCurrent("support")}>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18.5C14.9706 18.5 19 14.4706 19 9.5C19 4.52944 14.9706 0.5 10 0.5C5.02944 0.5 1 4.52944 1 9.5C1 14.4706 5.02944 18.5 10 18.5Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.5C10.6213 15.5 11.125 14.9963 11.125 14.375C11.125 13.7537 10.6213 13.25 10 13.25C9.37868 13.25 8.875 13.7537 8.875 14.375C8.875 14.9963 9.37868 15.5 10 15.5Z"
              fill="black"
            />
            <path
              d="M10 11V10.25C10.5192 10.25 11.0267 10.096 11.4584 9.80761C11.8901 9.51917 12.2265 9.1092 12.4252 8.62955C12.6239 8.14989 12.6758 7.62209 12.5746 7.11289C12.4733 6.60369 12.2233 6.13596 11.8562 5.76885C11.489 5.40173 11.0213 5.15173 10.5121 5.05044C10.0029 4.94915 9.47511 5.00114 8.99546 5.19982C8.5158 5.3985 8.10583 5.73495 7.81739 6.16663C7.52895 6.59831 7.375 7.10583 7.375 7.625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Support</p>
        </div>

        <div className="account_item" onClick={userSignOut}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AccountBar)
