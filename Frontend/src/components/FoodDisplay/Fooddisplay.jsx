import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'
import './Fooddisplay.css'
import axios from 'axios'
const Fooddisplay = ({category}) => {

    const {food_list} = useContext(Storecontext)

  return (
    <div className="food-display" id="food-display">
        <h2>Top Dishesh near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category === "All" || category === item.category)
                    return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} cat = {item.category}/>
            })}
        </div>
    </div>
  )
}

export default Fooddisplay