import { useContext } from "react";
import RecipeCardFull from "../components/RecipesCardFull";
import { GlobalContext } from "../components/context/RecipeContext";

export const AllRecipes = () => {
  const { cookies, recipesData } = useContext(GlobalContext);
  console.log(cookies);
  return (
    <>
      <div className="grid place-content-center">
        {/* Header */}
        <h1 className="text-3xl">All Recipes</h1> {/* Content */}
        <div className="grid grid-cols-5 gap-x-4 gap-y-6">
          {recipesData.map((recipe, i) => (
            <RecipeCardFull key={i} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};
