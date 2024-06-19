import React, { useState, useContext, useEffect } from 'react'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'
import './Orders.css'
const MyOrders = () => {

  const {url,token} = useContext(Storecontext)
  const [data,setData] = useState([])

  const fetchOrders = async ()=> {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
    setData(response.data.data);
    console.log(response.data.data);
  }
    
  useEffect(()=>{
    if(token){
        fetchOrders();
    }
  },[token])
  return (
    
    <div className='orders'>
    <h2>Your Orders</h2>
    
    <p>4 orders</p>
    <div className="orders-container">
        {data.map((item,index)=>{return(
            <div className="order-item" key={index}>
            <div className="detail">
                <p id='status'>  {item.status}</p>
                <p id='payment'>{item.payment ? "paid" : "Cash"}</p>
                <p id='amount'>${item.amount}</p>
                <p id='date'>{item.date.slice(0,10)}</p>
            </div>
            <hr />
            <div className="product-address-container">
                
                <div className="product-detail">
                    
                    {
                        item.items.map((product,index)=>{
                            return(
                                <div className="product" key={index}>
                                    <img src={`http://localhost:4000/images/${product.image}`} alt="" />
                                    <p id='product-name'>{product.name}</p>
                                    <p>{product.quantity}</p>
                                    <p>${product.price}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="address">
                    <h4>Address</h4>
                    <p>{item.address.firstname} {item.address.lastname}</p>
                    <p>{item.address.street} {item.address.area}</p>
                    <p>{item.address.city} {item.address.state}</p>
                    <p>{item.address.country} {item.address.pincode}</p>  
                </div> 
            </div>
        </div>
        );})
        
        }  
        </div>
    </div>
  )
}

export default MyOrders