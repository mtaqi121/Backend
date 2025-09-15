import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import todoRoutes from "./src/Router/Todo.js";
import userRoutes from "./src/Router/user.js";
const app = express();

// c25yrelme_db_user    // MongoDB username
// Dos0sCUBiNE5KMrT     // MongoDB password
// mongodb+srv://c25yrelme_db_user:Dos0sCUBiNE5KMrT@cluster0.ncbvn1c.mongodb.net/

app.use(bodyParser.json());
app.use("/api", todoRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(
    "mongodb+srv://c25yrelme_db_user:Dos0sCUBiNE5KMrT@cluster0.ncbvn1c.mongodb.net/"
  )
  .then(() => console.log("Connected!"))
  .catch((error) => console.error("error", error));

app.listen(3000, () => {
  console.log("Server running ");
});
