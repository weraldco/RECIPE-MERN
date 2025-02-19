import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";
import { RecipeType } from "../method/types";

const Category = () => {
  const { category } = useParams<{ category: string | undefined }>();

  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const { getRecipeByQuery } = useContext(GlobalContext);
  const getData = async () => {
    try {
      const data = await getRecipeByQuery(`category='${category}'`);
      // const data = await getRecipeByQuery("category='filipino'");

      setRecipesData(data.splice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const makeFirstLetterCapital = (label: string | undefined) => {
    if (label) {
      const chars = label.split("");
      const firstLetter = chars[0].toUpperCase();
      chars[0] = firstLetter;
      return chars.join("");
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">
          All {makeFirstLetterCapital(category)} Recipes
        </h1>
      </div>
    </>
  );
};

export default Category;
