import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	ingridients: [{ type: String, required: true }],
	instruction: [{ type: String, required: true }],
	img_url: { type: String, required: true },
	cooking_time: { type: String, required: true },
	author: { type: String },
});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);
