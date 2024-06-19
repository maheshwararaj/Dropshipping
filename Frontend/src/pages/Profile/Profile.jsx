import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Storecontext } from '../../context/Storecontext'
import {toast} from 'react-toastify'
import './Profile.css'
const Profile = () => {

    const {userdata,url,setUserData,getUser} = useContext(Storecontext)
    const [newUserData,setNewUserData] = useState({})
    const [image,setImage] = useState("")
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const changename = (event)=>{
        setName(event.target.value)
    }
    const changemobile = (event)=>{
        setMobile(event.target.value)
    }

    const updateUser = async ()=>{

        let newname = document.getElementById("name").value;
        let newmobile = document.getElementById("mobile").value;
        console.log(newname,newmobile);

        const response = await axios.post(`${url}/user/updateUser`,{userId:userdata._id,name,image,mobile})
        if(response.data.success){
            toast.success("Updated")
            setUserData(response.data.userdata)
        }
    }
    useEffect(()=>{
        async function getuseronce(){
            await getUser();
        }
        getuseronce();
    },[])

    useEffect(() => {
        if (userdata) {
            setImage(userdata.image);
            setName(userdata.name);
            setMobile(userdata.mobile);
        }
        console.log(userdata)
    }, [userdata]);
    if(!userdata) return <div>Loading...</div>
  return (
    <div className='profile' >
        <div className="profile-container">
            <div className="img-container">
                <img src={`/${image}.jpg`} alt="" />
            </div>
            <div className="select-image">
                <img src="/men.jpg" className={image == "men" ? "active-image" :    "" } onClick={()=>setImage("men")} alt="" />
                <img src="/women.jpg" className={image == "women" ? "active-image" : "" } onClick={()=>setImage("women")} alt="" />
                <img src="/boy.jpg" className={image == "boy" ? "active-image" : "" } onClick={()=>setImage("boy")} alt="" />
                <img src="/girl.jpg" className={image == "girl" ? "active-image" : "" } onClick={()=>setImage("girl")} alt="" />
            </div>
            <input type="text" id="name" placeholder={userdata.name}  value={name} onChange={changename}/>
            <input type="text" id='mobile' placeholder={userdata.mobile == "" ? "Phone" : userdata.mobile}  value={mobile} onChange={changemobile} />
            <input type="email" value={userdata.email} readOnly />
            <button onClick={updateUser}> Save </button>
            
        </div>
    </div>

  )
}

export default Profile