import React, { useState } from 'react'
import './Product.css'
import { assets } from '../../assets/assets'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import AddButton from '../SmallElements/AddButton';
const Product = ({product}) => {
  const [isAdded,setIsAdded] = useState(false)
  return (
    <div className='product'>
        <div className="product-image-container">
            <img src={product.image} alt={product.name} />
            <div className="image-absolutes">
                <div className="review-container">
                   {product.rating} <span>&#x2605;</span>
                </div>
                <div className="add-to-cart">
                  <p onClick={()=>setIsAdded(!isAdded)} className={isAdded ? "added" : "add"}>{isAdded ? "✔" : "+"}</p>
                </div>
            </div>
            {
                  isAdded ? <p className='toast-msg'>Added to cart</p> : ""
            }
        </div>
        <div className="product-info">
          <p className='product-name'>{product.name}</p>
          <p className='product-brand'>{product.brand}</p>
          <div className="product-amount-off">
            <p className='product-amount'>Rs.{product.amount} <span className='product-mrp'>Rs.{product.mrp}</span></p>
            <p className='product-off'>70% off</p>
          </div>
        </div>
    </div>
  )
}

export default Product