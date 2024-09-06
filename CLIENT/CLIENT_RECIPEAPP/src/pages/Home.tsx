import Category from "../components/Category";
import RecipeList from "../components/LatestRecipe";

const Home = () => {
  return (
    <>
      <div className="grid gap-1 px-0 md:px-10 xl:px-5">
        <div className="relative mb-10 mt-10">
          <div className="absolute right-10 top-10 grid w-[550px] gap-5">
            <h1 className="text-5xl font-bold text-white">
              Discover Recipe <br />
              of World Causine
            </h1>
            <span className="text-lg text-gray-300">
              Explore our diverse collection of recipes, from spicy Thai curries
              to hearty Italian pastas, we've got it all! Or be the one of us
              who can share your own unique Recipes.
            </span>
            <div className="grid grid-flow-col justify-start gap-2">
              <button className="rounded-md bg-green-600 px-2 py-2 text-sm text-white hover:bg-green-500">
                Explore Latest Recipe
              </button>
              <button className="rounded-md border-2 border-green-600 px-2 py-2 text-sm text-white hover:border-green-500">
                Join and share recipes.
              </button>
            </div>
          </div>

          <img
            src="https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg"
            alt=""
            className="h-[350px] w-full rounded-lg object-cover"
          />
        </div>
        <Category />
        <RecipeList label="Latest Recipes" />
        <RecipeList label="Filipino Recipes" />
        <RecipeList label="Indian Recipes" />
      </div>
    </>
  );
};

export default Home;
