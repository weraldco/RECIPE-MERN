import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { configureCors } from './config/corsConfig.js';
import { connectDB } from './config/dbConnection.js';
import { categoryRouter } from './routes/category.js';
import { recipeRouter } from './routes/recipe.js';
import { userRouter } from './routes/users.js';

const PORT = process.env.PORT || 3001;
dotenv.config();
const app = express();

connectDB();
app.use(configureCors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));
