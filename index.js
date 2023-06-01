import  express  from "express";
import path from 'path';
import url from 'url';
import cors from "cors"
import dotenv from "dotenv"
import {DataBase} from "./db.js"
import { createData, getAllData } from "./controller.js";

// initialize express
const app = express()

// provide path of files saved in system
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initialize dotenv
dotenv.config({path: __dirname + "/.env"})

app.use(cors())
app.use(express.json())

// connect database
DataBase()

//Routes
const router = express.Router()

app.post("/api/v1/createData",createData)
app.get("/",getAllData)

// connecting server
const URL = process.env.PORT || 8080;

app.listen(URL,()=>{
    console.log(`server running on ${process.env.DEV_MODE} on ${URL}`);  
})