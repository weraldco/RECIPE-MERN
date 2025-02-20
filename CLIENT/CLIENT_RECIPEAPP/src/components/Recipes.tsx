import { useContext, useEffect, useState } from "react";
import { RecipeType } from "../method/types";
import { GlobalContext } from "./context/RecipeContext";
import RecipeCard from "./RecipeCard";
type RecipesProps = {
  label: string;
  query: string;
};
const Recipes = ({ label, query }: RecipesProps) => {
  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const { getRecipeByCategory } = useContext(GlobalContext);
  const getData = async () => {
    try {
      console.log(query);
      const data = await getRecipeByCategory(query);

      setRecipesData(data.splice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="grid h-[750px] items-center justify-center md:h-[400px] xl:h-[440px] xl:px-3">
        <div>
          <h1 className="text-[1.25em]">{label}</h1>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5 text-center text-sm md:grid-cols-5 xl:mt-0 xl:grid-cols-6">
          {recipesData.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
