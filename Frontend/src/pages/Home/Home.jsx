import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Appdownload from '../../components/Appdownload/Appdownload'
import TagTemplate from '../../components/TagTemplate/TagTemplate'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [category,setCategory] = useState("All")
    const navigate = useNavigate()
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');
  
      if (token) {
        // Store the token in localStorage or cookies
        localStorage.setItem('token', token);
  
        // Redirect to a protected route or home page
        navigate('/');
      }
    }, [navigate]);
  return (
    <div className='section'>
        <Header/>
        <TagTemplate tag="Recent Finds"/>
        <TagTemplate tag="Recent Finds"/>
        <TagTemplate tag="Recent Finds"/>
        <Appdownload/>
        
    </div>
  )
}

export default Home