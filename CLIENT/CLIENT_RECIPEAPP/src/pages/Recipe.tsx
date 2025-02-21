import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsTag } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";
import { makeFirstLetterCapital } from "../lib/lib";
import { RecipeType, UserdataT } from "../method/types";

const Recipe = () => {
  const { cookies, getSingleRecipe, getAllUserData } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const username = cookies.username;
  const [recipeData, setRecipeData] = useState<RecipeType>();
  const { id } = useParams();

  const [userdata, setUserdata] = useState<UserdataT>();
  const [isFavorite, setIsFavorite] = useState(
    false, // () => userdata && userdata.favorite_recipes.includes(''),
  );

  const gettingData = async () => {
    const data = await getSingleRecipe(id as string);
    setRecipeData(data);

    const userdata = await getAllUserData(username as string);
    setUserdata(userdata);
  };

  const handleAddFavorite = async () => {
    await axios.put("http://localhost:3001/recipes/addfavorite", {
      username: username,
      id: id,
    });
    navigate("/");
    setIsFavorite((prev) => !prev);
  };

  const handleRemoveFavorite = async () => {
    await axios.delete("http://localhost:3001/recipes/removefavorite", {
      data: {
        username: username,
        id: id,
      },
    });
    navigate("/");
    setIsFavorite((prev) => !prev);
  };
  useEffect(() => {
    gettingData();
  }, [id]);

  console.log("recipe id: " + id);
  console.log(cookies);
  console.log(isFavorite);
  console.log("Recipe", recipeData);
  console.log("Userdata", userdata);
  console.log(userdata?.favorite_recipes);
  return (
    <div>
      {recipeData ? (
        <div className="flex h-full w-full flex-col items-center justify-between gap-4 p-4 md:flex-row md:items-start">
          <div className="w-[500px] md:w-full">
            <img src={recipeData.img_url} alt="" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <div>
              {cookies.username && (
                <div>
                  {isFavorite ? (
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
              <div className="text-3xl">{recipeData.name}</div>
              <div className="flex gap-2 text-sm">
                <BsTag />
                <span>{makeFirstLetterCapital(recipeData.category)}</span>
              </div>
            </div>

            <div>{recipeData.description}</div>
            <div>
              Source:{" "}
              <Link className="underline" to={recipeData.img_url}>
                {recipeData.img_url.split("/")[2]}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl">Ingridients</span>
              <ul className="flex flex-col gap-2 pl-5">
                {recipeData.ingridients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-2xl">Instructions</span>
              <ul className="flex flex-col gap-5 pl-5">
                {recipeData.instruction.map((item, index) => (
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
      )}
    </div>
  );
};
export default Recipe;
