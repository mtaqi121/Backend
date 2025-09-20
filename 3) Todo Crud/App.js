import express from "express";
import bodyParser from "body-parser";
import router from "./src/Router/Todo.js";
const app = express();

app.use(bodyParser.json());
app.use("/api",router)

app.listen(3000,() => {
  console.log("Server running ");
});