import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DBConnect from './db/db.js';
import cors from "cors"
import registerRoute from './routes/register.route.js';

const app = express();
app.use(cors({origin:"http://localhost:5173"}))

DBConnect();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is running!")
})


app.use("/api/register",registerRoute);
export default app;