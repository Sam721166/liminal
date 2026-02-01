import mongoose from "mongoose";

const ConectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is conected");
        
    } catch(err){
        console.log("MongoDB connection error: ", err);   
    }
}


export {ConectDb} 
  