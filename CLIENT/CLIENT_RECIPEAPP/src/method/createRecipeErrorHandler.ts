export type RecipeType = {
	_id: number,
	name: string,
	description: string,
	img_url: string,
	cooking_time: string,
	ingridients: string[],
	instructions: string[],
	author: string,
};
type RecipeIdT = {
	recipeId: string,
};
export type UserdataT = {
	_id: number,
	username: string,
	password: string,
	favorite_recipes: RecipeIdT[],
};
