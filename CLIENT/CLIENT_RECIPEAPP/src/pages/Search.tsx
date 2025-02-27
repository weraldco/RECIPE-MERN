import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCardFull from "../components/RecipesCardFull";

const Search = () => {
  const { recipesData } = useContext(GlobalContext);
  const { query } = useParams();

  const recipes = recipesData.filter((recipe) =>
    recipe.name.toLowerCase().includes((query as string).toLowerCase()),
  );

  return (
    <div className="grid gap-4 px-4">
      {/* Header */}
      <div className="grid gap-3">
        <h1 className="text-2xl">Searches</h1>{" "}
      </div>

      {/* Content */}
      <div className="grid-flow-cols grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {recipes ? (
          recipes.map((recipe, i) => <RecipeCardFull key={i} recipe={recipe} />)
        ) : (
          <div>Loading data..</div>
        )}
      </div>
    </div>
  );
};

export default Search;
