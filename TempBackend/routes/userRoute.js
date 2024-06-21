import express from "express"
import { loginUser,registerUser, getUsers, removeUser, userCount, getUserByGoogle, getUserByToken, updateUser } from "../controllers/userController.js"
import authMiddleWare from '../middleware/auth.js'
const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/getUsers",getUsers)
userRouter.get("/getUserByToken",authMiddleWare,getUserByToken)
userRouter.get("/getUserByGoogle",getUserByGoogle)
userRouter.post("/updateUser",updateUser)
userRouter.post("/remove",removeUser)
userRouter.get("/userCount",userCount)

export default userRouter;