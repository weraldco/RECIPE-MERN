import express from 'express';
import { CategoryModel } from '../model/Category.js';

const router = express.Router();

router.get('/all', async (req, res) => {
	try {
		const categories = await CategoryModel.find({}).exec();
		res.status(200).json({ categories });
	} catch (err) {
		console.error(err);
	}
});

export { router as categoryRouter };
