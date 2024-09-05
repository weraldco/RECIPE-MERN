import { useContext } from 'react';
import { GlobalContext } from './context/RecipeContext';
import RecipeCard from './RecipeCard';

const LatestRecipe = () => {
	const { recipesData, cookies } = useContext(GlobalContext);

	console.log(recipesData);
	console.log(cookies.access_token);
	return (
		<>
			<div>
				<div>
					<h1 className="text-[1.25em]">Latest Recipes</h1>
				</div>
				<div className="grid grid-cols-5 gap-5">
					{recipesData.map((recipe) => (
						<RecipeCard key={recipe._id} recipe={recipe} />
					))}
				</div>
			</div>
		</>
	);
};

export default LatestRecipe;
