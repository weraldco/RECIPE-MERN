/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  CategoryT,
  GlobalContextT,
  GlobalStateProps,
  RecipeType,
  UserdataT,
} from "../../method/types";

const defaultValue = {};

export const GlobalContext = createContext<GlobalContextT>();

const GlobalState = ({ children }: GlobalStateProps) => {
  const [recipeID, setRecipeID] = useState();
  const [userData, setUserData] = useState<UserdataT>();
  const [username, setUsername] = useState<string>("");
  const [recipesData, setRecipesData] = useState<RecipeType[]>([]);
  const [singleRecipeData, setSingleRecipeData] = useState<RecipeType>();
  const [categoryData, setCategoryData] = useState<CategoryT[]>([]);
  const [cookies, setCookies] = useCookies(["access_token", "username"]);
  const [query, setQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<RecipeType[] | undefined>([]);
  const navigate = useNavigate();

  const getUserFavoriteRecipe = async () => {
    try {
      setFavorites(
        recipesData.filter((recipe) =>
          userData?.favorite_recipes.includes(recipe._id),
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserFavoriteRecipe();
  }, [userData]);

  const addFavorites = async (username: string, id: string) => {
    await axios.put("http://localhost:3001/recipes/addfavorite", {
      username: username,
      id: id,
    });

    await getUserData(username);
  };

  const removeFavorites = async (username: string, id: string) => {
    await axios.delete("http://localhost:3001/recipes/removefavorite", {
      data: {
        username: username,
        id: id,
      },
    });
    await getUserData(username);
  };

  const getUserData = async (username: string) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/auth/getuser?username=${username}`,
      );

      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllUserData = async (username: string) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/auth/getuser?username=${username}`,
      );

      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  const getRecipeByUser = async (username: string) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/recipes/query?username=${username}`,
      );

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipeByCategory = async (category: string | undefined) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/recipes/category?query=${category}`,
      );

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleRecipe = async (id: string) => {
    try {
      if (id !== undefined) {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        if (response.data.length != 0) return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logOutUser = async () => {
    try {
      setCookies("access_token", "");
      setCookies("username", "");
      window.localStorage.removeItem("userID");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllRecipe();
    getAllCategories();
  }, []);

  useEffect(() => {
    getUserData(cookies.username);
  }, [cookies]);

  const defaultValue = {
    userData,
    recipesData,
    username,
    setUsername,
    cookies,
    setCookies,
    categoryData,
    setRecipeID,
    singleRecipeData,
    setQuery,
    getRecipeByUser,
    getRecipeByCategory,
    getSingleRecipe,
    getAllUserData,
    addFavorites,
    removeFavorites,
    favorites,
    logOutUser,
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
