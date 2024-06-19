import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
           
       <h1 className="logo">
         Urban<span>Finds</span>.
       </h1>

                <p>Looking for a wardrobe refresh? Got a last-minute event? Whether you're too busy to shop, expecting guests, or need a quick style upgrade, our online store is your go-to solution. Let us deliver the latest fashion trends to your doorstep in no time!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />                
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>   
                <ul>
                    <li>+91 7708665464</li>
                    <li>mahi@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">Copyright {new Date().getFullYear()} @ Mahi  </p>
    </div>
  )
}

export default Footer