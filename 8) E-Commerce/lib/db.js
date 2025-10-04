    
  import mongoose from "mongoose";
  import dotenv from "dotenv"
    dotenv.config();
  
const mongoURI = process.env.MONGO_URI 
  export const connectDB = () =>
    mongoose
      .connect(mongoURI)
      .then((c) => {
        console.log(`Connected with ${c.connection.name}`);
      })
      .catch((e) => console.log(e));
  
  