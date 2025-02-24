import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCardFull from "../components/RecipesCardFull";

const Favorites = () => {
  const { recipesData, userData, favorites } = useContext(GlobalContext);

  return (
    <>
      <div className="grid place-content-center">
        {/* Header */}
        <div className="grid grid-cols-2 gap-3">
          <h1 className="text-2xl">Your Favorite Recipes</h1>{" "}
        </div>

        {/* Content */}
        <div className="grid grid-cols-5 gap-5">
          {favorites ? (
            favorites.map((recipe, i) => (
              <RecipeCardFull key={i} recipe={recipe} />
            ))
          ) : (
            <div>Loading data..</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
