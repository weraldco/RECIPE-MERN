import { useContext } from "react";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCardFull from "../components/RecipesCardFull";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <>
      <div className="grid place-content-center gap-4 px-4">
        {/* Header */}
        <div className="grid gap-3">
          <h1 className="text-2xl">Your Favorite Recipes</h1>{" "}
        </div>

        {/* Content */}
        <div className="grid-flow-cols grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
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
