import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./src/Router/Todo.js";
import userRoutes from "./src/Router/user.js";
import dbConnection from "./src/lib/lib.js";
const app = express();

app.use(bodyParser.json());
app.use("/api", todoRoutes);
app.use("/api/user", userRoutes);

dbConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server running ");
  });
});
