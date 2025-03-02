import Category from "../components/CategoryList";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div className="grid w-full gap-4 px-0 md:px-10 xl:px-5">
      <div className="relative mt-10">
        <div className="absolute right-10 top-10 grid w-[300px] gap-5 md:w-[550px]">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Discover Recipe <br />
            of World Causine
          </h1>
          <span className="text-base text-gray-300 md:text-lg">
            Explore our diverse collection of recipes, from spicy Thai curries
            to hearty Italian pastas, we've got it all! Or be the one of us who
            can share your own unique Recipes.
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
      <Recipes label={"Latest Recipes"} query="filipino" />
      <Recipes label={"Filipino Recipes"} query="filipino" />
      <Recipes label={"Indian Recipe"} query="filipino" />
      <Recipes label={"Thai Recipes"} query="filipino" />
    </div>
  );
};

export default Home;
