import mongoose from "mongoose";

const connectDB = async ()  => {  
    await mongoose.connect("mongodb+srv://maheshwararaj2003:mahesh0407@cluster0.ktr3x3g.mongodb.net/Dropshipping").then(()=>console.log("DB COnnected"))
    .catch(()=> console.log("Error occured"));
}


export default connectDB;