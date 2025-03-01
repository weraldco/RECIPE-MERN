import { useContext } from "react";
import { GlobalContext } from "./context/RecipeContext";
import RecipeCard from "./RecipeCard";
type RecipeListProps = {
  label: string;
};
const RecipeList = ({ label }: RecipeListProps) => {
  const { recipesData } = useContext(GlobalContext);
  const recipes = recipesData && recipesData.slice(0, 6);
  return (
    <>
      <div className="grid h-[750px] items-center justify-center overflow-hidden md:h-[400px] xl:h-[440px] xl:px-3">
        <div>
          <h1 className="text-[1.25em]">{label}</h1>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5 text-center text-sm md:grid-cols-5 xl:mt-0 xl:grid-cols-6">
          {recipes &&
            recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
