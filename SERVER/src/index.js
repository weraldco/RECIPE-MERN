import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from '../config/dbConnection.js';
import { categoryRouter } from '../routes/category.js';
import { recipeRouter } from '../routes/recipe.js';
import { userRouter } from '../routes/users.js';
dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use('/auth', userRouter);
app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);
app.listen(3001, () => console.log('Server is running in port: 3001'));
