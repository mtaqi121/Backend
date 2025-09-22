
  import express from "express"
import helmet from "helmet"
import cors from 'cors'
import {errorMiddleware} from "./middlewares/error.js"
import morgan from "morgan"
import dotenv from "dotenv"
import dbConnection from "./lib/db.js"
  
  dotenv.config({path: './.env',});
  
  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';

  
const mongoURI = process.env.MONGO_URI

dbConnection(mongoURI);
  
  const app = express();
  
                                
  
  
app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);
    
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true}));
app.use(morgan('dev'))
    
  
  app.get('/', (req, res) => {
     res.send('Hello, World!');
  });
  
  // your routes here
  
    
  // app.get("*", (req, res) => {
  //   res.status(404).json({
  //     success: false,
  //     message: "Page not found",
  //   });
  // });
  
  app.use(errorMiddleware);
    
  app.listen(3000, () => console.log('Server is working on Port: in '+envMode+' Mode.'));
  