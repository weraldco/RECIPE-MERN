import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
	name: { type: String, required: true },
	img_url: { type: String, required: true },
});

export const CategoryModel = mongoose.model('category', CategorySchema);
