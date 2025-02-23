import { useContext } from "react";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCardFull from "../components/RecipesCardFull";

const MyRecipes = () => {
  // get the function in Context
  const { cookies, recipesData } = useContext(GlobalContext);
  const username = cookies.username;
  const recipes = recipesData.filter((recipe) => recipe.author === username);
  // get the data of user
  return (
    <div>
      <h1 className="text-2xl">Your Recipes</h1>
      {recipes && (
        <div className="grid-flow-cols grid grid-cols-4 gap-4">
          {recipes.map((recipe, i) => (
            <RecipeCardFull key={i} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
