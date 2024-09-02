import express from 'express';
import { RecipeModel } from '../model/Recipe.js';

const router = express.Router();

router.get('/all', async (req, res) => {
	try {
		const recipes = await RecipeModel.find({}).exec();
		res.status(200).json(recipes);
	} catch (err) {
		console.error(err);
	}
});

router.post('/create', async (req, res) => {
	try {
		const {
			recipeName,
			recipeDescription,
			recipeImgURL,
			recipeCookingTime,
			ingridientsList,
			instructionsList,
			recipeAuthor,
		} = await req.body;
		if (
			!recipeName ||
			!recipeDescription ||
			!recipeImgURL ||
			!recipeCookingTime ||
			!ingridientsList ||
			!instructionsList
		)
			return res.status(202).json({ message: `All field is required.` });

		const newRecipe = {
			name: recipeName,
			description: recipeDescription,
			ingridients: ingridientsList,
			instruction: instructionsList,
			img_url: recipeImgURL,
			cooking_time: recipeCookingTime,
			author: recipeAuthor,
		};

		const result = await RecipeModel.create(newRecipe);
		if (result)
			return res.status(200).json({ message: `${recipeName} recipe added` });
	} catch (err) {
		res.status(204).json({ message: err });
	}
});

router.get('/:id', async (req, res) => {
	const recipeID = req.params.id;
	try {
		const recipe = await RecipeModel.findOne({ _id: recipeID }).exec();
		if (!recipe) return res.status(202).json({ message: 'Recipe not found.' });
		res.status(200).json(recipe);
	} catch (err) {
		console.error(err);
	}
});

export { router as recipeRouter };
