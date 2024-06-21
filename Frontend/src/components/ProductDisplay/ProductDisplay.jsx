import React from 'react'
import Product from '../Product/Product';
import './ProductDisplay.css'
const ProductDisplay = ({tag}) => {
     //get product list from the context 
  // productlist
 
    const productlist = [{
        _id:"989873",
        name:"Striped Shirt",
        brand:"Highlander",
        desc:"lkjl slkjdf lkjlkjasdf hjhjhdf",
        category:"Shirt",
        tag:"Recent Finds",
        amount:672,
        mrp:800,
        delivery:"free",
        quantity:10,
        image:"/urbanfinds.png",
        rating:4.5,
        variations:["S","M","L","XL"],
        reviews:[{name:"mahesh",review:"dkjjh djhkjf jhjhakjhdkjf"},{name:"karan",review:"product is good but delivery was late"}]        
    },
    {
        _id:"989873",
        name:"Checked Shirt",
        brand:"Roadster",
        desc:"lkjl slkjdf lkjlkjasdf hjhjhdf",
        amount:672,
        mrp:800,
        category:"shirt",
        tag:"Recent Finds",
        quantity:10,
        image:"/urbanfinds.png",
        rating:4.5,
        variations:["S","M","L","XL"],
        reviews:[{name:"mahesh",review:"dkjjh djhkjf jhjhakjhdkjf"},{name:"karan",review:"product is good but delivery was late"}]        
    
    },
    {
      _id:"989873",
      name:"Checked Shirt",
      brand:"Roadster",
      desc:"lkjl slkjdf lkjlkjasdf hjhjhdf",
      amount:672,
      mrp:800,
      category:"shirt",
      tag:"Recent Finds",
      quantity:10,
      image:"/urbanfinds.png",
      rating:4.5,
      variations:["S","M","L","XL"],
      reviews:[{name:"mahesh",review:"dkjjh djhkjf jhjhakjhdkjf"},{name:"karan",review:"product is good but delivery was late"}]        
  
  },
  {
    _id:"989873",
    name:"Checked Shirt",
    brand:"Roadster",
    desc:"lkjl slkjdf lkjlkjasdf hjhjhdf",
    amount:672,
    mrp:800,
    category:"shirt",
    tag:"Recent Finds",
    quantity:10,
    image:"/urbanfinds.png",
    rating:4.5,
    variations:["S","M","L","XL"],
    reviews:[{name:"mahesh",review:"dkjjh djhkjf jhjhakjhdkjf"},{name:"karan",review:"product is good but delivery was late"}]        

},
{
  _id:"989873",
  name:"Checked Shirt",
  brand:"Roadster",
  desc:"lkjl slkjdf lkjlkjasdf hjhjhdf",
  amount:672,
  mrp:800,
  category:"shirt",
  tag:"Recent Finds",
  quantity:10,
  image:"/urbanfinds.png",
  rating:4.5,
  variations:["S","M","L","XL"],
  reviews:[{name:"mahesh",review:"dkjjh djhkjf jhjhakjhdkjf"},{name:"karan",review:"product is good but delivery was late"}]        

}


  ]

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