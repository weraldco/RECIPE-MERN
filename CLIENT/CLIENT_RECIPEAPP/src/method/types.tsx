import { ReactNode } from 'react';

export type GlobalContextT = {
	username?: string;
	setUsername: unknown;
	recipesData: RecipeType[];
	cookies: unknown;
	setCookies: unknown;
};

export type GlobalStateProps = {
	children: ReactNode;
};

export type RecipeType = {
	_id: number;
	name: string;
	description: string;
	img_url: string;
	cooking_time: string;
	ingridients: string[];
	instructions: string[];
	author: string;
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
