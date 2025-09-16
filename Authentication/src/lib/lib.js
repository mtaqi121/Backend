// c25yrelme_db_user    // MongoDB username
// Dos0sCUBiNE5KMrT     // MongoDB password
// mongodb+srv://c25yrelme_db_user:Dos0sCUBiNE5KMrT@cluster0.ncbvn1c.mongodb.net/

import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://c25yrelme_db_user:Dos0sCUBiNE5KMrT@cluster0.ncbvn1c.mongodb.net/"
    );
    console.log("MongoBD connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default dbConnection;
