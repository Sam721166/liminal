import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }
  if (mongoose.connection.readyState === 2) return; // connecting

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    isConnected = false;
    throw err;
  }
};

export default connectDb; 
 