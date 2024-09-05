import { RecipeItemProps } from '../method/types';

const RecipeCard = ({ recipe }: RecipeItemProps) => {
	return (
		<>
			<div>
				<div>
					<img src={recipe.img_url} alt="" className="w-[190px] h-[300px]" />
				</div>
				<div>{recipe.name}</div>
			</div>
		</>
	);
};

export default RecipeCard;
