import { useContext } from 'react';
import { GlobalContext } from './context/RecipeContext';
import RecipeCard from './RecipeCard';
type RecipeListProps = {
	label: string;
};
const RecipeList = ({ label }: RecipeListProps) => {
	const { recipesData, cookies } = useContext(GlobalContext);

	return (
		<>
			<div className="h-[750px]  grid justify-center items-center overflow-hidden md:h-[400px] xl:px-3 xl:h-[440px]">
				<div>
					<h1 className="text-[1.25em]">{label}</h1>
				</div>
				<div className="grid grid-cols-2  xl:grid-cols-6 md:grid-cols-5 gap-5 text-center text-sm mt-5 xl:mt-0">
					{recipesData.map((recipe) => (
						<RecipeCard key={recipe._id} recipe={recipe} />
					))}
				</div>
			</div>
		</>
	);
};

export default RecipeList;
