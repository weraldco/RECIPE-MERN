import { RecipeItemProps } from '../method/types';

const RecipeCard = ({ recipe }: RecipeItemProps) => {
	return (
		<>
			<div className="grid  hover:scale-110 z-20 ease-linear duration-200 gap-3">
				<div>
					<img
						src={recipe.img_url}
						alt=""
						className="w-[190px] h-[300px] rounded-lg shadow-lg"
					/>
				</div>
				<div className=" ">{recipe.name}</div>
			</div>
		</>
	);
};

export default RecipeCard;
