import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import RecipeItem from '../components/RecipeItem';
import { RecipeType, UserdataT } from '../method/createRecipeErrorHandler';

export const AllRecipes = () => {
	const [userdata, setUserdata] = useState<UserdataT>();
	const [recipes, setRecipes] = useState<RecipeType[]>([]);
	const [cookies] = useCookies(['username']);

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

	const getFavorite = async () => {
		try {
			const userName = await cookies.username;
			const response = await axios.post('http://localhost:3001/auth/getuser', {
				username: userName,
			});
			setUserdata(response.data.foundUser);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		getFavorite();
	}, [cookies]);

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
