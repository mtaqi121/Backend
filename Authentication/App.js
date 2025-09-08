import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./src/Router/Todo.js";
import userRouter from "./src/Router/user.js";
const app = express();

app.use(bodyParser.json());
app.use("/api", todoRouter);
app.use("/api/user", userRouter);


app.listen(3000,() => {
  console.log("Server running ");
});