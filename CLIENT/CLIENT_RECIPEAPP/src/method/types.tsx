import { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalContextT = {
  // userData: UserdataT | undefined;
  // recipesData: RecipeType[] | undefined;
  // username: string | undefined;
  // setUsername?: Dispatch<SetStateAction<string>>;
  // cookies: CookiesType | undefined;
  // setCookies?: (name: "access_token" | "username", value: string) => void;
  // categoryData: CategoryT[];
  // setRecipeID?: Dispatch<SetStateAction<string | undefined>>;
  // singleRecipeData?: RecipeType | undefined;
  // setQuery: Dispatch<SetStateAction<string>>;
  // favorites: RecipeType[] | undefined;

  // getRecipeByCategory?: (category: string) => Promise<RecipeType[] | undefined>;
  // getAllUserData?: (username: string) => Promise<UserdataT>;
  getSingleRecipe: (id: string) => Promise<RecipeType | null>;

  // logOutUser?: () => void;

  // addFavorites: (username: string, id: string) => void;
  // removeFavorites: (username: string, id: string) => void;
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
