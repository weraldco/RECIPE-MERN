import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export type RecipeType = {
	_id: number;
	name: string;
	description: string;
	img_url: string;
	cooking_time: string;
	ingridients: string[];
	instructions: string[];
};

export const AllRecipes = () => {
	const navigate = useNavigate();
	const clickNewRecipe = () => {
		navigate('/create-recipe');
	};
	const [recipes, setRecipes] = useState<RecipeType[]>([]);
	const getResponse = async () => {
		try {
			const response = await axios.get('http://localhost:3001/recipes/all');
			if (response.status === 200) setRecipes(response.data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		getResponse();
	}, []);
	console.log(recipes);
	return (
		<>
			<div className="grid place-content-center">
				{/* Header */}
				<div className="grid grid-cols-2 gap-3 w-[400px]">
					<h1 className="text-3xl font-bold">All Recipes</h1>{' '}
					<button
						onClick={clickNewRecipe}
						className="bg-gray-700 text-white	rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-all"
					>
						Add new Recipe
					</button>
				</div>

				{/* Content */}
				<div className="grid grid-cols-2 gap-5">
					{recipes.map((recipe) => (
						<RecipeItem key={recipe._id} recipe={recipe} />
					))}
				</div>
			</div>
		</>
	);
};

type RecipeItemProps = {
	recipe: RecipeType;
};

const RecipeItem = ({ recipe }: RecipeItemProps) => {
	const { _id, name, description, img_url } = recipe;
	return (
		<>
			<div className="grid w-[400px]">
				<img src={img_url} alt="" />
				<Link to={`/recipe/${_id}`}>
					<h2 className="text-2xl font-bold">{name}</h2>
				</Link>
				<p>{description}</p>
			</div>
		</>
	);
};
