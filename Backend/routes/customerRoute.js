import express from 'express'

const customerRouter = express.Router()

customerRouter.get("/get",getUsers)

export default customerRouter;
