import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/context/RecipeContext";
import { makeFirstLetterCapital } from "../lib/lib";

const Recipe = () => {
  const { cookies, getSingleRecipe } = useContext(GlobalContext);

  const [recipeData, setRecipeData] = useState<[]>([]);
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);

  console.log("recipe id: " + { id });
  console.log(cookies);
  console.log(isFavorite);
  console.log(getSingleRecipe(id));
  return (
    <div>
      {/* {singleRecipeData ? (
        <div className="flex h-full w-full flex-col items-center justify-between gap-4 p-4 md:flex-row md:items-start">
          <div className="w-[500px] md:w-full">
            <img src={singleRecipeData.img_url} alt="" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <div>
              {cookies.username && (
                <div>
                  {isFave ? (
                    <HiHeart
                      className="absolute right-1 top-1 text-4xl text-red-400 hover:text-gray-200 active:text-white"
                      onClick={handleRemoveFavorite}
                    />
                  ) : (
                    <HiHeart
                      className="absolute right-1 top-1 text-4xl text-white hover:text-red-400 active:text-red-300"
                      onClick={handleAddFavorite}
                    />
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="text-3xl">{singleRecipeData.name}</div>
              <div className="flex gap-2 text-sm">
                <BsTag />
                <span>{makeFirstLetterCapital(singleRecipeData.category)}</span>
              </div>
            </div>

            <div>{singleRecipeData.description}</div>
            <div>
              Source:{" "}
              <Link className="underline" to={singleRecipeData.img_url}>
                {singleRecipeData.img_url.split("/")[2]}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">Ingridients</span>
              <ul className="flex flex-col gap-2 pl-5">
                {singleRecipeData.ingridients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-2xl">Instructions</span>
              <ul className="flex flex-col gap-5 pl-5">
                {singleRecipeData.instruction.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full border-2 px-3 py-1">
                      {index + 1}
                    </div>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div> No data found..</div>
      )} */}
    </div>
  );
};
export default Recipe;
