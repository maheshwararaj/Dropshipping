import React from 'react'
import './Product.css'
import { assets } from '../../assets/assets'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = ({product}) => {

  return (
    <div className='product'>
        <div className="product-image-container">
            <img src={assets.shirt} alt={product.name} />
            <div className="image-absolutes">
                <div className="review-container">
                   {product.rating} <span>&#x2605;</span>
                </div>
                <div className="add-to-cart">
                  <FontAwesomeIcon className={false ? "added" : ""} icon={faCartShopping} />
                  <p>{false ? "":"Add"}</p>
                </div>
            </div>
        </div>
        <div className="product-info">
          <p className='product-name'>{product.name}</p>
          <p className='product-brand'>{product.brand}</p>
          <p className='product-amount'>Rs.{product.amount} <span className='product-mrp'>Rs.{product.mrp}</span></p>
        </div>
    </div>
  )
}

export default Product