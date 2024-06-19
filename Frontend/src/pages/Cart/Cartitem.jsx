import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'
import './Cartitem.css'



const Cartitem = ({item,qty}) => {
   const {addToCart,removeFromCart,removeAllFromCart,url} = useContext(Storecontext)
  return (
    <div  className="cart-item" key={item._id}>
      <div className="image-title">
          <div className="image">
            <img src={url+"/images/"+item.image} alt="" />
          </div>
          <div className="title">
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <ul>
              <li>35 mins</li>
              <li>20% off</li>
            </ul>
          </div>
      </div>
      <div className="quantity-price">
        <p>price ${item.price}</p>
        <p>qty <button onClick={()=>removeFromCart(item._id)} className='mini-btn'>-</button>{qty}<button onClick={()=>addToCart(item._id)} className='mini-btn'>+</button> </p>
        <p>total ${item.price*qty}</p>
      </div>
      <img onClick={()=> removeAllFromCart(item._id)} className='close-icon' src={assets.cross_icon} alt="" />
  </div>
  )
}

export default Cartitem