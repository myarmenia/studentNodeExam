import React, { useEffect } from 'react'
import './activeOrders.css'
import ActiveOrderItem from './ActiveOrderItem/ActiveOrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../../../Redux/Slices/Cart/cartThunks'
import { useLocation } from 'react-router-dom'
import AccountCartLoading from '../../Loadings/AccountCartLoading'
import { UNKNOWN_ERROR } from '../../../Constants/constants'

const ActiveOrders = () => {
    const dispatch = useDispatch()
    const {cart,loadingStatus} = useSelector((state)=> state.cartData)


    useEffect(()=>{
      dispatch(getCartThunk())
    },[])
  return (
    <div className='activeOrder'>
        <h2>Active Orders</h2>
        <div className="all_titles">
                    <h3>Your Order</h3>
                    <h4>Product name</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>
        </div>
        <div className="all_active_orders">
          {
            loadingStatus === "pending" ? <AccountCartLoading/> : loadingStatus ==="rejected" ? <div>{UNKNOWN_ERROR}</div>: cart ? cart.items.length === 0 ? <div className='empty_cart'>Cart Was Empty</div>: cart.items.map((el)=> <ActiveOrderItem wine={el} key={el.wine_id._id}/>) : <div className='empty_cart'>Cart Was Empty</div>
             
          }
        </div>
        <div className="active_orders_total">
                    <div className="all_total_quantity">
                        <p>Total quantity {cart ? cart.totalCount:0}</p>
                    </div>
                    <div className="all_total_amount">
                        <p>Total Amount {cart ? cart.totalPrice: 0}$</p>
                    </div>
        </div>

    </div>
  )
}

export default React.memo(ActiveOrders)