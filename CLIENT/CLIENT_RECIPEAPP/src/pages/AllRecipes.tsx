import { useContext } from "react";
import RecipeCardFull from "../components/RecipesCardFull";
import { GlobalContext } from "../components/context/RecipeContext";

export const AllRecipes = () => {
  const { cookies, recipesData } = useContext(GlobalContext);
  console.log(cookies);
  return (
    <>
      <div className="grid place-content-center px-3">
        {/* Header */}
        <h1 className="text-2xl">All Recipes</h1> {/* Content */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 xl:grid-cols-6">
          {recipesData &&
            recipesData.map((recipe, i) => (
              <RecipeCardFull key={i} recipe={recipe} />
            ))}
        </div>
      </div>
    </>
  );
};
