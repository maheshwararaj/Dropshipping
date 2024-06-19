import express, { response } from "express";
import cors from "cors"
import connectDB  from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

connectDB();

// api endPoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.listen(port,'127.0.0.1',()=>{
           console.log("Server running in http://localhost:"+port)
         })

app.get("/",(req,res)=>{
    res.send("API working")
})


//mongodb+srv://maheshwararaj2003:mahesh0407@cluster0.rwqcpw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0