import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from '../config/dbConnection.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.listen(3001, () => console.log('Server is running in port: 3001'));
