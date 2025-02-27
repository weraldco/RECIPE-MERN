import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";

const Search = () => {
  const { recipesData } = useContext(GlobalContext);
  const { query } = useParams();

  const recipes = recipesData.filter((recipe) =>
    recipe.name.startsWith(query as string),
  );
  console.log("Recipes", recipes);
  console.log("Query", query);
  return <div>Searching..</div>;
};

export default Search;
