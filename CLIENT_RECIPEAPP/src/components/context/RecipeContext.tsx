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

const defaultValue: GlobalContextT = {
  recipeID: null,
  userData: null,
  recipesData: null,
  username: null,
  setUsername: () => null,
  cookies: null,
  categoryData: null,
  setRecipeID: () => null,
  singleRecipeData: null,

  getRecipeByUser: async () => null,
  getRecipeByCategory: async () => null,
  getAllUserData: async () => null,
  getSingleRecipe: async () => null,

  setQuery: () => null,
  favorites: null,
  addFavorites: async () => {},
  removeFavorites: async () => {},
  logOutUser: async () => {},
};

export const GlobalContext = createContext<GlobalContextT>(defaultValue);

const GlobalState = ({ children }: GlobalStateProps) => {
  const [recipeID, setRecipeID] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserdataT | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [recipesData, setRecipesData] = useState<RecipeType[] | null>(null);
  const [singleRecipeData] = useState<RecipeType | null>();
  const [categoryData, setCategoryData] = useState<CategoryT[] | null>(null);
  const [_, setQuery] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<RecipeType[] | null>(null);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token", "username"]);

  const getUserFavoriteRecipe = async () => {
    try {
      if (recipesData) {
        setFavorites(
          recipesData.filter((recipe) =>
            userData?.favorite_recipes.includes(recipe._id),
          ),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserFavoriteRecipe();
  }, [userData]);

  const addFavorites = async (username: string | null, id: string | null) => {
    try {
      if (username && id) {
        await axios.put(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/addfavorite`,
          {
            username: username,
            id: id,
          },
        );

        await getUserData(username);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorites = async (
    username: string | null,
    id: string | null,
  ) => {
    try {
      if (username && id) {
        await axios.delete(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/removefavorite`,
          {
            data: {
              username: username,
              id: id,
            },
          },
        );
        await getUserData(username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async (username: string) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/getuser?username=${username}`,
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
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/getuser?username=${username}`,
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
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/all`,
      );
      if (response.status === 200) {
        setRecipesData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllCategories = async () => {
    try {
      const categoryRes = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/category/all`,
      );
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
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/query?username=${username}`,
      );

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipeByCategory = async (
    category: string,
  ): Promise<RecipeType[] | null> => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/category?query=${category}`,
      );
      const data = await res.data;
      return data || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getSingleRecipe = async (id: string): Promise<RecipeType | null> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/recipes/${id}`,
      );

      const data = await response.data;
      return data || null;
    } catch (err) {
      console.error(err);
      return null;
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

  const value = {
    recipeID,
    userData,
    recipesData,
    username,
    setUsername,
    cookies,
    categoryData,
    setRecipeID,
    singleRecipeData,
    setQuery,
    favorites,
    getRecipeByUser,
    getRecipeByCategory,
    getSingleRecipe,
    getAllUserData,
    logOutUser,
    addFavorites,
    removeFavorites,
  };

  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
};

export default GlobalState;
