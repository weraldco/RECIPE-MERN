import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AllRecipes } from './pages/AllRecipes';
import { CreateRecipe } from './pages/CreateRecipe';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Recipe from './pages/Recipe';
import Registration from './pages/Register';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-recipe" element={<CreateRecipe />} />
				<Route path="/all-recipe" element={<AllRecipes />} />
				<Route path="/recipe/:id" element={<Recipe />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
