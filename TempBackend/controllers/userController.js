
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../model/userModel.js"


//login user

const loginUser = async (req,res)=>{
    const {email,password} = req.body;

    try{
    
    const user = await userModel.findOne({"email":email})

    if(!user){
       return res.json({success:false,message:"User doesn't Exist"})
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
       return res.json({success:false,message:"Wrong Password"})
    }

    const token = createToken(user._id)
        res.json({success:true,user,token})
    }
    catch(error){
       return res.json({success:false,message:"error"})
    }

}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Register user
const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;

    try{
        //checking is user already exist
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"Email already Exist"})
        }
        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter Vaild email"})
        }

        if(password.length < 8){
            return res.json({success:false,message:"Enter Strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        
        res.json({success:true,token})
    }   

    catch(error){
        res.json({success:false,message:error})
    }
}

const getUsers =async (req,res) =>{
    let userlist = await userModel.find({});
    res.json({success:true,userlist})
}
const getUserByToken = async (req,res)=>{
   
    let user = await userModel.findOne({_id:req.body.userId});
    res.json({success:true,user});
}
const getUserByGoogle = async(req,res)=>{
   
    let userdetail = await userModel.find({googleId:req.body.gooogleId})
    res.json({success:true,user:userdetail})
}
const updateUser = async (req,res) => {
    const {userId,name,image,mobile} = req.body;

    try{
        console.log(mobile)
        await userModel.findByIdAndUpdate(userId,{name:name,image:image,mobile:mobile});
        const user = await userModel.findById(userId);
        res.json({success:true,message:"updated",userdata:user});
    }
    catch(error){
        res.json({success:false,message:error});
    }
}
const removeUser = async (req,res) => {
    try{
    await userModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Removed"})
    }
    catch(error){
        res.json({success:false,message:"Error"})
    }
}

const userCount = async (req,res) =>{
    try{
        const count = await userModel.countDocuments()
        res.json({success:true,count});
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error})
    }
}
export {loginUser,registerUser,getUsers,updateUser,removeUser,userCount,getUserByToken,getUserByGoogle};