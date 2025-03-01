/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RecipeType, UserdataT } from "../method/types";
import { GlobalContext } from "./context/RecipeContext";

type RecipeItemProps = {
  recipe: RecipeType;
  userdata?: UserdataT;
};

const RecipeItem = ({ recipe, userdata }: RecipeItemProps) => {
  const { cookies, addFavorites, removeFavorites } = useContext(GlobalContext);

  const username = cookies?.username as string;
  const { _id, name, description, img_url, author } = recipe;

  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(false);

  const handleAddFavorite = () => {
    addFavorites(username, _id);
  };

  const handleRemoveFavorite = () => {
    removeFavorites(username, _id);
  };

  useEffect(() => {
    if (userdata) {
      setIsFavorite(() => userdata.favorite_recipes.includes(_id as string));
    }
  }, [userdata]);

  return (
    <>
      <div className="grid w-[400px] hover:scale-[1.1]">
        <div className="relative">
          {cookies?.username && (
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

          <img src={img_url} alt="" />
        </div>
        <Link to={`/recipe/${_id}`}>
          <h2 className="text-2xl font-bold">{name}</h2>
        </Link>
        <p>
          by <b>{author}</b>
        </p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default RecipeItem;
