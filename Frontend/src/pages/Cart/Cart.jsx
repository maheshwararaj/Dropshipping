import React, { useContext, useEffect, useState } from 'react'

import { Storecontext } from '../../context/Storecontext'
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css'
import Cartitem from './Cartitem';
const Cart = () => {

  

  const {cartItems,food_list,getTotalCartAmount,loadCartData} = useContext(Storecontext);
  
  const getTotalItemsInCartCount = ()=>{
    let total_count = 0;
    if(cartItems != null){
    for(const item in cartItems){
        if(cartItems[item] > 0)
            total_count += cartItems[item]
            
    }
    return total_count;
    }
    return 0;
}

  const navigate = useNavigate()

  return (
      <div className="cart">
        {getTotalItemsInCartCount() > 0 ? <>
        <h2>My Cart</h2>
        <p>{getTotalItemsInCartCount()} items in Cart</p>
        <div className="cart-container">
        <div className="cart-items">
          {food_list.map((item,index) => {
             if(cartItems[item._id] > 0){
              
                return(
             
                  
                  <Cartitem key={index} item = {item} qty = {cartItems[item._id]}/>

                );
             }
          })}
          
        </div>
        <div className="right">
          
          <div className="apply-coupon cart-details" >
             <h2>Coupon Code</h2>
             <p>Do you have a Coupon Code...</p>
             <input type="text" placeholder='Enter here'/>
             <button>Apply</button>
          </div>
          <div className="cart-details cart-total">
            <h2>Cart Total</h2>
            <ul>
              <li>Cart subtotal <span>${getTotalCartAmount()}</span></li>
              <li>Delivery <span>Free</span></li>
              <li style={{fontWeight:"bold"}}>Cart Total <span>${getTotalCartAmount()}</span></li>
            </ul>
            <button onClick={()=>navigate('/order')} > Checkout</button>
          </div>
        </div>
        </div> 
        </>
        : <div className='empty-cart'>
          <h2>Your Cart is Empty</h2>
          <Link to = '/'><button className='tomato-button'>Get Started</button></Link>
          </div>}
      </div>
  )
}

export default Cart