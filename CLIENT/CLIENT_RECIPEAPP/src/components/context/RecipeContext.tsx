import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
	GlobalContextT,
	GlobalStateProps,
	RecipeType,
} from '../../method/types';

export const GlobalContext = createContext<GlobalContextT>();

const GlobalState = ({ children }: GlobalStateProps) => {
	const [username, setUsername] = useState('werald');
	const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
	const [cookies, setCookies] = useCookies(['access_token', 'username']);

	const getAllRecipe = async () => {
		try {
			const response = await axios.get('http://localhost:3001/recipes/all');
			if (response.status === 200) {
				setRecipesData(response.data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getAllRecipe();
	}, []);

	const defaultValue = {
		recipesData,
		username,
		setUsername,
		cookies,
		setCookies,
	};

	return (
		<>
			<GlobalContext.Provider value={defaultValue}>
				{children}
			</GlobalContext.Provider>
		</>
	);
};

export default GlobalState;
