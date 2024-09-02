import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import RecipeItem from '../components/RecipeItem';
import { RecipeType, UserdataT } from '../method/createRecipeErrorHandler';

const Favorites = () => {
	const [recipes, setRecipes] = useState<RecipeType[]>([]);
	const [userdata, setUserdata] = useState<UserdataT>();

	const [cookies] = useCookies(['username']);
	const getFavorite = async () => {
		try {
			const userName = await cookies.username;
			const response = await axios.post(
				'http://localhost:3001/recipes/userfavorites',
				{
					username: userName,
				}
			);
			setRecipes(response.data?.userFavorites);
			setUserdata(response.data?.foundUser);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		getFavorite();
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
						<RecipeItem key={recipe._id} recipe={recipe} userdata={userdata} />
					))}
				</div>
			</div>
		</>
	);
};

export default Favorites;
