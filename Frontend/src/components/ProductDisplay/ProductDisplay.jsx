import React from 'react'
import Product from '../Product/Product';
import { productlist } from '../../assets/assets';
import './ProductDisplay.css'
const ProductDisplay = ({tag}) => {
     //get product list from the context 
  // productlist
 

  return (
    
    <div className="productdisplay">
        {/* {productlist.map((product,index)=>{
            if(product.tag == tag || tag == "All"){
            return (
                <Product product = {product} key={index}/>
                
            );
            }
        })} */}
       <div className="productdisplay-list">
       {productlist.map((product,index)=>{
            if(product.tag == tag || tag == "All"){
            return (
                <Product product = {product} key={index}/>
                
            );
            }
        })}
       </div>
    </div>
  )
}

export default ProductDisplay