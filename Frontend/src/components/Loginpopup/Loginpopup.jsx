import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import './Loginpopup.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { Storecontext } from '../../context/Storecontext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
    const {url,token,setToken,getUser,userdata} = useContext(Storecontext)
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onGoogleLogin = ()=>{
        window.open("http://localhost:6005/auth/google/callback","_self")
    }

    
    const onLogin = async (event)=>{
        event.preventDefault()
        const status = currState == "Login"? "login":"register"
        const res = await axios.post(`${url}/user/${status}`,data)
        
        if(res.data.success){ 
            await getUser()
            setToken(res.data.token)
            localStorage.setItem("token",res.data.token)
            setShowLogin(false)
            
            console.log(userdata)
            toast.success(currState+" success")
            
        }
        else{
            toast.error(res.data.message);
        }
    }

    useEffect(()=>{
       async function gettinguser (){
        await getUser()
       }
       gettinguser();
    },[])

    

    

  return (
    <div className='login-popup'>

        <form  className="login-popup-container" onSubmit={onLogin}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Signup" ? <input name='name' onChange={onChangeHandler} type="text" placeholder='Name' value = {data.name} required /> : ""}
                <input type="text" name='email' onChange={onChangeHandler} placeholder='Email' value={data.email} required/>
                <input type="text" name='password' onChange={onChangeHandler} placeholder='Password' value={data.password} required/>
            </div>
            <button type='submit'>{currState === "Signup" ? "Create account":"Login"}</button>
           <p style={{textAlign:"center"}}>or</p>
           <div className='google'>
            <p onClick={onGoogleLogin}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                 Continue with Google </p>
           </div>
            
            {currState === "Login" ? <p>Create New Account? <span onClick={()=>setCurrState("Signup")}>click here!</span> </p>
             : <p>Already have an account ?<span onClick={()=>setCurrState("Login")}>click here!</span></p>  }
           
           
        </form>


       
  
       
       
        
    </div>
  )
}

export default Loginpopup