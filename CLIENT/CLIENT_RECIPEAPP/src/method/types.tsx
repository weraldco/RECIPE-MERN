import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextT = {
  recipeID: string | null;
  userData: UserdataT | null;
  recipesData: RecipeType[] | null;
  username: string | null;
  setUsername?: Dispatch<SetStateAction<string | null>>;
  cookies: CookiesType | null;
  categoryData: CategoryT[] | null;
  setRecipeID?: Dispatch<SetStateAction<string | null>>;
  singleRecipeData?: RecipeType | null;
  setQuery: Dispatch<SetStateAction<string | null>>;
  favorites: RecipeType[] | null;

  getRecipeByUser: (username: string) => Promise<RecipeType | null>;
  getRecipeByCategory: (category: string) => Promise<RecipeType[] | null>;
  getAllUserData: (username: string) => Promise<UserdataT[] | null>;
  getSingleRecipe: (id: string) => Promise<RecipeType | null>;

  logOutUser: () => Promise<void>;

  addFavorites: (username: string | null, id: string | null) => Promise<void>;
  removeFavorites: (
    username: string | null,
    id: string | null,
  ) => Promise<void>;
};

export type GlobalStateProps = {
  children: ReactNode;
};

export type CookiesType = {
  access_token?: string | null;
  username?: string | null;
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

export type UserdataT = {
  _id: string;
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
