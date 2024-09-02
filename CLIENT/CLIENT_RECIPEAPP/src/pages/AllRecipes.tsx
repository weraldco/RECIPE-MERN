import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export type RecipeType = {
	_id: number;
	name: string;
	description: string;
	img_url: string;
	cooking_time: string;
	ingridients: string[];
	instructions: string[];
	author: string;
};

export const AllRecipes = () => {
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
	return (
		<>
			<div className="grid place-content-center">
				{/* Header */}
				<div className="grid grid-cols-2 gap-3 ">
					<h1 className="text-3xl font-bold">All Recipes</h1>{' '}
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
	const { _id, name, description, img_url, author } = recipe;
	return (
		<>
			<div className="grid w-[400px]">
				<div className="relative">
					<div>
						<HiHeart className="absolute right-1 top-1 text-4xl text-white hover:text-red-400" />
					</div>
					<img src={img_url} alt="" />
				</div>
				<Link to={`/recipe/${_id}`}>
					<h2 className="text-2xl font-bold">{name}</h2>
				</Link>
				<p>
					by <b>{author}</b>
				</p>
				<p>{description}</p>
			</div>
		</>
	);
};
