import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

export const Storecontext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:6005"



    const [token,setToken] = useState(null)
    const [cartItems,setCartItems] = useState({});
    const [food_list,setFoodlist] = useState([])




    // user 
    const [userdata,setUserData] = useState(null);


    const getUser = async ()=>{


        try{
            if(token != null){

                console.log("if working")
                const res = await axios.get(`${url}/user/getUserByToken`,{headers:{token}})
                console.log(res.data.user)
                setUserData(res.data.user)
            }
            // else{
            //     const response = await axios.get(`${url}/login/success`,{withCredentials:true});
            //     if(response.data.user){
            //         console.log("user" + response.data.user)
            //         const res = await axios.get(`${url}/user/getUserByGoogle`,{"googleId":response.data.user.googleId})
            //         console.log(res)
            //         setUserData(res.data.user);
            //     }
            // }
            
          
        }
        catch(error){
            console.log("error",error);
        }
    }
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        window.open("http://localhost:6005/logout","_self")
        setUserData(null)
      };
    
    const addToCart = async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

        if(token){
            // await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
           
        }
    }
 
    const removeFromCart= async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            // await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const removeAllFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:0}))
    }

   const getTotalCartAmount = ()=>{
        let total_amount = 0;
        for(const item in cartItems){
            
            if(cartItems[item] > 0){
                let iteminfo = food_list.find((product)=> product._id === item )
                if(iteminfo)
                    total_amount += iteminfo.price * cartItems[item]
            }
        
        }
        return total_amount;
   }
   
   const getTotalItemsInCart = ()=>{
        let total_count = 0;
        if(cartItems !== 'undefined'){
            console.log(cartItems)
            for(const item in cartItems){
                if(cartItems[item] > 0)
                    total_count += cartItems[item]
                
             }
        }
        return total_count;
        
   }

   const fetchFoodList = async ()=>{
    // const response = await axios.get(`${url}/api/food/list`)
    // setFoodlist(response.data.data)
    
   }

   const loadCartData = async (token) =>{
    // const response = await axios.post("http://localhost:4000/api/cart/get",{},{headers:{token}})
   
    // setCartItems(response.data.cartData);
    
   }
    
   
   useEffect( ()=>{
        // async function loadData(){
            
        //     if(localStorage.getItem("token")) {
        //         setToken(localStorage.getItem("token"));
        //         // await loadCartData(localStorage.getItem("token"))
        //     }
            
            
        // }
        // async function getUser(){
        //     try{
        //         if(token != null){
    
        //             console.log("if working")
        //             const res = await axios.get(`${url}/user/getUserByToken`,{headers:{token}})
        //             console.log(res.data.user)
        //             setUserData(res.data.user)
        //         }
                
        //     }
        //     catch(error){
        //         console.log("error",error);
        //     }
        // }
        // loadData();
        // getUser();
        // console.log(userdata)
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            getUser();
        }
    }, [token])
    
  

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        loadCartData,
        removeFromCart,
        getTotalCartAmount,
        removeAllFromCart,
        getTotalItemsInCart,
        url,
        token,
        setToken,
        userdata,
        setUserData,
        getUser,
        logout
       

    }


  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StoreContextProvider;
