import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import connectDB from './config/db.js'
const port = 6005;
import session from 'express-session'
import passport from 'passport'
import { Strategy as OAuth2Strategy } from 'passport-google-oauth2';
import userModel from './model/userModel.js'
import userRouter from './routes/userRoute.js'



const app = express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))

connectDB();


const cliendid = "64385451146-t1273r4tla2j98epfte42n0cl2igtl5l.apps.googleusercontent.com";
const clientsecret = "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";
app.use(session({
    secret:"iammahiandmydob040703",
    resave:false,
    saveUninitialized:true
}))

//setup passport
app.use(passport.initialize())
app.use(passport.session())

passport.use(
    new OAuth2Strategy({
        clientID:cliendid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        console.log("profile",profile);
        try {
            let user = await userModel.findOne({googleId:profile.id})
            if(!user){
                user = new userModel({

                    googleId:profile.id,
                    name:profile.displayName,
                    email:profile.email,
                    image:"men",
                    mobile:""
                    
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

//passport serialize and deserialize
passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173/kjkj",
    failureRedirect:"http://localhost/login"
}))

app.get("/login/success",async(req,res)=>{
    


    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }
    else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:5173");
    })
})




//endpoints
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.use('/user',userRouter)



app.listen(port,()=>{
    console.log("server running in port "+port);
})
