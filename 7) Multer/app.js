import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import connectDB from "./lib/db.js";
import { v2 as cloudinary } from "cloudinary";
import uploadRouter from "./routes/upload.js";

cloudinary.config({
  cloud_name: "dyvjf5why",
  api_key: "968935514286283",
  api_secret: "r4j2o5Wu3vRdoqimWbPKOLfHEMU",
});

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here
app.use("/api", uploadRouter);

app.use(errorMiddleware);

// Start server after database connection
connectDB().then(() => {
  app.listen(port, () =>
    console.log(
      "Server is working on Port:" + port + " in " + envMode + " Mode."
    )
  );
});
