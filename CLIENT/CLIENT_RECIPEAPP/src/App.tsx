import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AllRecipes } from './pages/AllRecipes';
import { CreateRecipe } from './pages/CreateRecipe';
import { Home } from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import Recipe from './pages/Recipe';
import Registration from './pages/Register';

function App() {
	const [cookies] = useCookies<string>(['access_token']);
	console.log(cookies);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{cookies.access_token !== '' && (
					<Route path="/create-recipe" element={<CreateRecipe />} />
				)}
				<Route path="/all-recipe" element={<AllRecipes />} />
				<Route path="/recipe/:id" element={<Recipe />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
