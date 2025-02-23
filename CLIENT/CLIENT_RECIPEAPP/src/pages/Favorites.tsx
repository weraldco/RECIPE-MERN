import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCardFull from "../components/RecipesCardFull";

const Favorites = () => {
  const { recipesData, userData } = useContext(GlobalContext);
  const [favoriteRecipes, setFavoriteRecipes] = useState<[]>([]);

  //   const favoriteRecipes = recipesData.filter((recipe) => {
  // 	return userData.favorite_recipes.includes(recipe._id);
  //  });

  //   useEffect(()=>{setFavoriteRecipes(

  //   )},[userData.favorite_recipes])
  return (
    <>
      <div className="grid place-content-center">
        {/* Header */}
        <div className="grid grid-cols-2 gap-3">
          <h1 className="text-2xl">Your Favorite Recipes</h1>{" "}
        </div>

        {/* Content */}
        <div className="grid grid-cols-5 gap-5">
          {favoriteRecipes.map((recipe, i) => (
            <RecipeCardFull key={i} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
