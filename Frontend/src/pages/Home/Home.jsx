import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { Exploremenu } from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
import Footer from '../../components/Footer/Footer'
import TagTemplate from '../../components/TagTemplate/TagTemplate'
const Home = () => {
    const [category,setCategory] = useState("All")
  return (
    <div className='section'>
        <Header/>
        <TagTemplate tag="Recent Finds"/>
        <Appdownload/>
        
    </div>
  )
}

export default Home