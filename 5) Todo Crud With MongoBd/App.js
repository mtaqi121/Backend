import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./src/Router/Todo.js";
import dbConnection from "./src/lib/lib.js";
const app = express();

app.use(bodyParser.json());
app.use("/api", todoRoutes);

dbConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server running ");
  });
});

