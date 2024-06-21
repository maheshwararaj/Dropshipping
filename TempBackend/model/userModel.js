import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId:{type:String,default:""},
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,default:""},
    image:{type:String,default:"men"},
    isAdmin:{type:Boolean,default:false},
    password:{type:String,required:false},
    cartData:{type:Object,default:{}}}
    ,
    {minimize:false}
    )
    
const userModel = mongoose.models.users || mongoose.model("users",userSchema);

export default userModel;