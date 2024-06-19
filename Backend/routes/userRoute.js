import express from "express"
import { loginUser,registerUser, getUsers, removeUser, userCount } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/getUsers",getUsers)
userRouter.post("/remove",removeUser)
userRouter.get("/userCount",userCount)

export default userRouter;