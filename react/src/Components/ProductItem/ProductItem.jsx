import React from "react";
import {useDispatch} from 'react-redux'
import "./productItem.css";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import {addToCartThunk} from '../../Redux/Slices/Cart/cartThunks'
import { getAccessToken } from "../../Utils/accontUtils";
import { changeCartLength } from "../../Redux/Slices/Cart/CartSlice";




const ProductItem = ({wine}) => {
  const dispatch = useDispatch()
  const num = wine.price / 100 * wine.discount

  const addProductToCart = ()=>{
    const token = getAccessToken()
    if(token){
      dispatch(addToCartThunk({wine_id:wine._id}))
      dispatch(changeCartLength())
    }else{
      window.location.href = "/user/signin"
    }
  }


  return (
    <div className="wine">
      <NavLink to={`/products/${wine._id}`}className="product">
        <h3>{wine.title}</h3>
        <p>Alc {wine.alcohol}% 0.${wine.volume}l</p>
        <div className="wine_img_div">
        <img src={`${process.env.REACT_APP_HOST}${wine.imageUrl}`} alt="Wine" />
        </div>
        <ReactStars
         count={5}
         size={25}
         edit={false}
         isHalf={true}
         value={wine.rating}
         activeColor="#A40D30"
        />
      </NavLink>
      <div className="price_buy">
      {
            wine.discount ? <div className="price">
            <div className="old_price">
                <p>{wine.price}$</p>
                 <span>{wine.discount}%</span>
              </div> 
                <div className="new_price">
                <p> {wine.price- num} $</p>
                <div className="buy" onClick={addProductToCart}>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"

                  >
                    <path
                      d="M22 21H7.725L4.2375 1.825C4.1967 1.59537 4.07691 1.38722 3.89887 1.23657C3.72082 1.08592 3.49572 1.00223 3.2625 1H1"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 26C10.3807 26 11.5 24.8807 11.5 23.5C11.5 22.1193 10.3807 21 9 21C7.61929 21 6.5 22.1193 6.5 23.5C6.5 24.8807 7.61929 26 9 26Z"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 26C23.3807 26 24.5 24.8807 24.5 23.5C24.5 22.1193 23.3807 21 22 21C20.6193 21 19.5 22.1193 19.5 23.5C19.5 24.8807 20.6193 26 22 26Z"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.8125 16H22.5125C22.98 16.0014 23.433 15.838 23.7919 15.5386C24.1508 15.2391 24.3927 14.8227 24.475 14.3625L26 6H5"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          : <div className="price" onClick={addProductToCart}>
            <div className="new_price">
                <p> {wine.price} $</p>
                <div className="buy">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 21H7.725L4.2375 1.825C4.1967 1.59537 4.07691 1.38722 3.89887 1.23657C3.72082 1.08592 3.49572 1.00223 3.2625 1H1"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 26C10.3807 26 11.5 24.8807 11.5 23.5C11.5 22.1193 10.3807 21 9 21C7.61929 21 6.5 22.1193 6.5 23.5C6.5 24.8807 7.61929 26 9 26Z"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 26C23.3807 26 24.5 24.8807 24.5 23.5C24.5 22.1193 23.3807 21 22 21C20.6193 21 19.5 22.1193 19.5 23.5C19.5 24.8807 20.6193 26 22 26Z"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.8125 16H22.5125C22.98 16.0014 23.433 15.838 23.7919 15.5386C24.1508 15.2391 24.3927 14.8227 24.475 14.3625L26 6H5"
                      stroke="#A40D30"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
          </div>
          }
        
      </div>
    </div>
  );
};

export default  React.memo(ProductItem)
