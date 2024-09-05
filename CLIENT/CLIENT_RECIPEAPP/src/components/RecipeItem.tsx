import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { HiHeart } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { RecipeType, UserdataT } from '../method/createRecipeErrorHandler';

type RecipeItemProps = {
	recipe: RecipeType;
	userdata?: UserdataT;
};

const RecipeItem = ({ recipe, userdata }: RecipeItemProps) => {
	const navigate = useNavigate();
	const [cookies] = useCookies(['username']);
	const userName = cookies?.username;
	const { _id, name, description, img_url, author } = recipe;

	const [isFave, setFave] = useState(
		() => userdata && userdata?.favorite_recipes.includes(_id)
	);

	const handleAddFavorite = async () => {
		await axios.put('http://localhost:3001/recipes/addfavorite', {
			username: userName,
			id: _id,
		});
		navigate('/');
		setFave((prev) => !prev);
	};

	const handleRemoveFavorite = async () => {
		await axios.delete('http://localhost:3001/recipes/removefavorite', {
			data: {
				username: userName,
				id: _id,
			},
		});
		navigate('/');
		setFave((prev) => !prev);
	};

	return (
		<>
			<div className="grid w-[400px] hover:scale-[1.1]">
				<div className="relative">
					{cookies?.username && (
						<div>
							{isFave ? (
								<HiHeart
									className="absolute right-1 top-1 text-4xl text-red-400 hover:text-gray-200 active:text-white"
									onClick={handleRemoveFavorite}
								/>
							) : (
								<HiHeart
									className="absolute right-1 top-1 text-4xl text-white hover:text-red-400 active:text-red-300"
									onClick={handleAddFavorite}
								/>
							)}
						</div>
					)}

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

export default RecipeItem;
