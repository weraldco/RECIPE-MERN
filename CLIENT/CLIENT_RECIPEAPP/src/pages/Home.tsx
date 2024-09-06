import Category from '../components/Category';
import RecipeList from '../components/LatestRecipe';

const Home = () => {
	return (
		<>
			<div className="md:px-10 xl:px-10 px-0">
				<Category />
				<RecipeList label="Latest Recipes" />
				<RecipeList label="Filipino Recipes" />
				<RecipeList label="Indian Recipes" />
			</div>
		</>
	);
};

export default Home;
