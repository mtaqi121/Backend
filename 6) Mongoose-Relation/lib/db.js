import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default dbConnection;