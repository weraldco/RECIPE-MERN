import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeType } from './AllRecipes';

const Recipe = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState<RecipeType>();

	const getData = async () => {
		try {
			const response = await axios.get(`http://localhost:3001/recipes/${id}`);
			if (response.data.length != 0) return setRecipe(response.data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{recipe && (
				<>
					<div className="grid place-items-center">
						<div className="grid w-4/5 max-w-[700px]">
							<img src={recipe?.img_url} alt="" />
							<h2 className="text-2xl font-bold">{recipe?.name}</h2>

							<p>{recipe?.description}</p>
							<p>Cooking time: {recipe?.cooking_time}</p>

							<div>
								{recipe?.ingridients.map((item: string, index: number) => (
									<p key={index}>{item}</p>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default Recipe;
