import React, { useState } from 'react'
import './cartProductItem.css'
import { useDispatch } from 'react-redux'
import { changeCartItemCount, deleteCartItem, getCartThunk } from '../../Redux/Slices/Cart/cartThunks'
import { NavLink } from 'react-router-dom'


const CartProductItem = ({wine}) => {

    const dispatch = useDispatch()

    const increaseCount = async ()=>{      
        const newCount  =1
        const {payload} = await dispatch(changeCartItemCount({count:newCount,cartItemId: wine._id, changeType:"increase"}))
        dispatch(getCartThunk())
        dispatch(changeCartItemCount())

    }


    const  decreaseCount = async()=>{
        const newCount = wine.count - 1;
        if(newCount < 1){
            const {payload} = await dispatch(deleteCartItem({cartItemId:wine._id}))
            dispatch(getCartThunk())
            dispatch(changeCartItemCount())
        }else{
            const {payload} = await dispatch(changeCartItemCount({count:1,cartItemId: wine._id,changeType:"decrease"}))
            dispatch(getCartThunk())
            dispatch(changeCartItemCount())

        }
    }

    const removeCartItem = async()=>{
        const {payload} = await dispatch(deleteCartItem({cartItemId:wine._id}))
        dispatch(getCartThunk())
        dispatch(changeCartItemCount())

    }

  return (
    <div className='cart_product_item'>
        <NavLink to={`/products/${wine.wine_id._id}`} className="img_div">
            <img src={`${process.env.REACT_APP_HOST}${wine.wine_id.imageUrl}`} alt="" />
        </NavLink>
        <NavLink to={`/products/${wine.wine_id._id}`} className="product_name">
            <h4>{wine.wine_id.title}</h4>
            <p>Article  <span> &nbsp;&nbsp;   {wine.wine_id.article}</span></p>
            <p>Country  <span> &nbsp;&nbsp;  {wine.wine_id.about.country}</span></p>
        </NavLink>
        <div className="product_price responsive_div">
            <p className='responsive_title'>Price</p>
            <p>{wine.wine_id.price}$</p>
        </div>
        <div className="product_quantity responsive_div">
            <p className='responsive_title'>Quantity</p>
            <span onClick={decreaseCount}>-</span>
            <span>{wine.count}</span>
            <span onClick={increaseCount}>+</span>
        </div>
        <div className="product_total responsive_div">
            <p className='responsive_title'>Total</p>
            <p>{wine.wineTotalPrice}$</p>
        </div>
        <div className="product_edit" onClick={removeCartItem}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.375 7.875H5.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.625 14.625V23.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.375 14.625V23.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.125 7.875V29.25C28.125 29.5484 28.0065 29.8345 27.7955 30.0455C27.5845 30.2565 27.2984 30.375 27 30.375H9C8.70163 30.375 8.41548 30.2565 8.20451 30.0455C7.99353 29.8345 7.875 29.5484 7.875 29.25V7.875" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.625 7.875V5.625C23.625 5.02826 23.3879 4.45597 22.966 4.03401C22.544 3.61205 21.9717 3.375 21.375 3.375H14.625C14.0283 3.375 13.456 3.61205 13.034 4.03401C12.6121 4.45597 12.375 5.02826 12.375 5.625V7.875" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
  )
}

export default React.memo(CartProductItem)