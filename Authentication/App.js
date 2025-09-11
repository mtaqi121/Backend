import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./src/Router/Todo.js";
import userRoutes from "./src/Router/user.js";
const app = express();

app.use(bodyParser.json());
app.use("/api", todoRoutes);
app.use("/api/user", userRoutes);


app.listen(3000,() => {
  console.log("Server running ");
});