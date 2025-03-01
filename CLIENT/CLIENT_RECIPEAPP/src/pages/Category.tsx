import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { makeFirstLetterCapital } from "../lib/lib";
import { RecipeType } from "../method/types";

const Category = () => {
  const { category } = useParams<{ category: string | undefined }>();

  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const { getRecipeByCategory } = useContext(GlobalContext);

  const getData = async () => {
    try {
      const data = await getRecipeByCategory(category as string);
      if (data) {
        setRecipesData(data.splice(0, 6));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {}
        <h1 className="text-3xl">
          All {makeFirstLetterCapital(category)} Recipes
        </h1>
        {recipesData && recipesData.length > 0 ? (
          <div className="flex justify-between">
            {recipesData.map((recipe, i) => (
              <RecipeCard key={i} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div>No recipes available for this category</div>
        )}
      </div>
    </>
  );
};

export default Category;
