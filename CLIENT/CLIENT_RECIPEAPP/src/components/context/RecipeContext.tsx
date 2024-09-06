import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  CategoryT,
  GlobalContextT,
  GlobalStateProps,
  RecipeType,
} from "../../method/types";

export const GlobalContext = createContext<GlobalContextT>();

const GlobalState = ({ children }: GlobalStateProps) => {
  const [username, setUsername] = useState("werald");
  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryT[]>([]);
  const [cookies, setCookies] = useCookies(["access_token", "username"]);

  const getAllRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:3001/recipes/all");
      if (response.status === 200) {
        setRecipesData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllCategories = async () => {
    try {
      const categoryRes = await axios.get("http://localhost:3001/category/all");
      if (categoryRes.status === 200) {
        setCategoryData(categoryRes.data.categories);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllRecipe();
    getAllCategories();
  }, []);

  const defaultValue = {
    recipesData,
    username,
    setUsername,
    cookies,
    setCookies,
    categoryData,
  };

  return (
    <>
      <GlobalContext.Provider value={defaultValue}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalState;
