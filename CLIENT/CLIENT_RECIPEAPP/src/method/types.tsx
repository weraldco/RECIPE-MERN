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
};

export type GlobalStateProps = {
  children: ReactNode;
};

export type CookiesType = {
  access_token?: string;
  username?: string;
};
export type RecipeType = {
  _id: number;
  name: string;
  description: string;
  img_url: string;
  cooking_time: string;
  ingridients: string[];
  instruction: string[];
  author: string;
  category: string;
};
type RecipeIdT = {
  recipeId: string;
};
export type UserdataT = {
  _id: number;
  username: string;
  password: string;
  favorite_recipes: RecipeIdT[];
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
