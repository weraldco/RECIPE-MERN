/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";

export type GlobalContextT = {
  username?: string;
  setUsername: unknown;
  recipesData: RecipeType[];
  cookies: CookiesType;
  setCookies: unknown;
  categoryData: CategoryT[];
  setRecipeID: (id: string | undefined) => void;
  singleRecipeData?: RecipeType;
  getRecipeByQuery: (query: string) => RecipeType[];
  getRecipeByCategory: (category: string) => RecipeType[];
  getSingleRecipe: (id: string) => RecipeType;
  getAllUserData: (username: string) => UserdataT;
  userData: UserdataT;
  addFavorites: (username: string | undefined, id: string | undefined) => void;
  removeFavorites: (
    username: string | undefined,
    id: string | undefined,
  ) => void;
  favorites: RecipeType[] | undefined;
  logOutUser: () => void;
};

export type GlobalStateProps = {
  children: ReactNode;
};

export type CookiesType = {
  access_token?: string;
  username?: string;
};
export type RecipeType = {
  _id: string;
  name: string;
  description: string;
  img_url: string;
  cooking_time: string;
  ingridients: string[];
  instruction: string[];
  author: string;
  category: string;
  rating: number;
};
type RecipeIdT = {
  recipeId: string;
};
export type UserdataT = {
  _id: number;
  username: string;
  password: string;
  favorite_recipes: string[];
  img_url: string;
};
export type RecipeItemProps = {
  recipe: RecipeType;
  userdata?: UserdataT;
};

export type CategoryT = {
  _id: string;
  name: string;
  img_url: string;
};
