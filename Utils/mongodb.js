import mongoose from "mongoose";
import dotenv from "dotenv";

 dotenv. config();
 
 async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoBD connected");
    } catch (error){
        console.error("MongoDb connection error:", error);
        process.exit(1);
    }
}

export {connectDB};