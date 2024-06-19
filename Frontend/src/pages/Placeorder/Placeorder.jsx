import React, { useContext, useState } from 'react'
import  { Storecontext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';
import './Placeorder.css'
import axios from 'axios';
import Payment from '../../components/Payment/Payment';
const Placeorder = () => {
 
  const navigate = useNavigate()
  const {getTotalCartAmount,token,food_list,cartItems,url,loadCartData} = useContext(Storecontext);
  const [showPayment,setShowPayment] = useState(false)
  const [addressData,setAddressData] = useState({
    firstname:"",
    lastname:"",
    street:"",
    area:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  })
  const [transactionId,setTransactionId] = useState("")
  let paid = false
  const onChangeHandler = (event)=>{
    setAddressData((data)=>({...data,[event.target.name]:event.target.value}))
  
  }
  const placeOrder = (event)=>{
    event.preventDefault();
    setShowPayment(true)

  }

  const processOrder = async()=>{
    setShowPayment(false)
    paid = true
    if(paid){
      
    let orderItems = [];
    food_list.forEach((item,index)=>{
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"]=cartItems[item._id]
        orderItems.push(itemInfo)
        
      }
    })

    const orderData = {
      items:orderItems,
      amount:getTotalCartAmount(),
      address:addressData
    }

    const response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
    
     await loadCartData(localStorage.getItem("token"))
     navigate('/Cart')
    }
    else{
      console.log("error")
    }
    }
    else{
      console.log(paid)
      
    }
  }
  return (
    <>
    {showPayment ? <Payment processOrder={processOrder} setShowPayment={setShowPayment} transactionId={transactionId} setTransactionId={setTransactionId}/> :""}
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' name="firstname" value={addressData.firstname} onChange={onChangeHandler}  required/>
          <input type="text" placeholder='Last name' name="lastname" value={addressData.lastname} onChange={onChangeHandler}  required/>
        </div>
        <input type="text" placeholder='Street' name="street" value={addressData.street}  onChange={onChangeHandler} required/>
        <input type="text"  placeholder='Area' name="area" value={addressData.area}  onChange={onChangeHandler} required/>
        <div className="multi-fields">
          <input type="text" placeholder='City' name="city" value={addressData.city} onChange={onChangeHandler} required/>
          <input type="text" placeholder='State' name="state" value={addressData.state} onChange={onChangeHandler} required/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Pincode' name="pincode" value={addressData.pincode} onChange={onChangeHandler} required/>
            <input type="text" placeholder='Country' name="country" value={addressData.country} onChange={onChangeHandler}  required/>
        </div>
        <input type="text" placeholder='Phone' name="phone" value={addressData.phone} onChange={onChangeHandler}  required/>
      </div>
      <div className="place-order-right">
      <div className="cart-details cart-total " >
            <h2>Cart Total</h2>
            <ul>
              <li>Cart subtotal <span>${getTotalCartAmount()}</span></li>
              <li>Delivery <span>Free</span></li>
              <li style={{fontWeight:"bold"}}>Cart Total <span>${getTotalCartAmount()}</span></li>
            </ul>
            <button type='submit' > Place order</button>
          </div>
      </div>
      
    </form>
    </>
  );
}
export default Placeorder