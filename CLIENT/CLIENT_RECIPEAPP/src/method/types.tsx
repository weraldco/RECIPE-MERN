import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextT = {
  userData: UserdataT | null;
  recipesData: RecipeType[] | null;
  // username: string | undefined;
  // setUsername?: Dispatch<SetStateAction<string>>;
  // cookies: CookiesType | undefined;
  // setCookies?: (name: "access_token" | "username", value: string) => void;
  // categoryData: CategoryT[];
  // setRecipeID?: Dispatch<SetStateAction<string | undefined>>;
  singleRecipeData?: RecipeType | null;
  // setQuery: Dispatch<SetStateAction<string>>;
  favorites: RecipeType[] | null;

  getRecipeByCategory?: (category: string) => Promise<RecipeType[] | null>;
  getAllUserData?: (username: string) => Promise<UserdataT[] | null>;
  getSingleRecipe: (id: string) => Promise<RecipeType | null>;

  // logOutUser?: () => void;

  addFavorites: (username: string, id: string) => Promise<void>;
  removeFavorites: (username: string, id: string) => Promise<void>;
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
