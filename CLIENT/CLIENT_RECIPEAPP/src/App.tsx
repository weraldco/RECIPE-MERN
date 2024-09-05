import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AllRecipes } from './pages/AllRecipes';
import { CreateRecipe } from './pages/CreateRecipe';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import Recipe from './pages/Recipe';
import Registration from './pages/Register';

function App() {
	const [cookies] = useCookies<string>(['access_token']);
	console.log(cookies);
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="xl:w-[1280px] w-full h-screen bg-slate-50 px-10">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{cookies.access_token !== '' && (
							<>
								<Route path="/my-favorite" element={<Favorites />} />
								<Route path="/create-recipe" element={<CreateRecipe />} />
							</>
						)}
						<Route path="/all-recipe" element={<AllRecipes />} />
						<Route path="/recipe/:id" element={<Recipe />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
