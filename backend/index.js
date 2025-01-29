import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './db/db.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';


dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 2000;  // Set default port if not specified in .env

app.use(cors({
    origin: 'http://localhost:5173',  // Your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // Allow credentials (cookies, authorization headers)
  })); 
app.use(express.json());
app.use(cookieParser());

DBConnection()

app.use("/user",userRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
