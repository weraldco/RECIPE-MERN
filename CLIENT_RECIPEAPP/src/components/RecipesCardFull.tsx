/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RecipeItemProps } from "../method/types";
import { GlobalContext } from "./context/RecipeContext";

const RecipeCardFull = ({ recipe }: RecipeItemProps) => {
  const { cookies, addFavorites, removeFavorites, userData } =
    useContext(GlobalContext);

  const username = cookies?.username as string;

  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(false);

  const { _id, img_url, name, description, cooking_time, rating } = recipe;

  const handleAddFavorite = () => {
    addFavorites(username, _id);
  };

  const handleRemoveFavorite = () => {
    removeFavorites(username, _id);
  };

  useEffect(() => {
    if (userData) {
      setIsFavorite(() => userData.favorite_recipes.includes(_id as string));
    }
  }, [userData]);

  return (
    <div className="group relative duration-200">
      {cookies?.username && (
        <div>
          {isFavorite ? (
            <HiHeart
              size={40}
              className="absolute right-0 top-[-2px] z-20 hidden text-4xl text-red-400 duration-200 hover:text-red-300 active:text-red-500 group-hover:flex"
              onClick={handleRemoveFavorite}
            />
          ) : (
            <HiHeart
              size={40}
              className="absolute right-0 top-[-2px] z-20 hidden text-4xl text-gray-400 duration-200 hover:text-gray-300 active:text-gray-500 group-hover:flex"
              onClick={handleAddFavorite}
            />
          )}
        </div>
      )}

      <Link to={`/recipes/${_id}`}>
        <div className="z-20 grid cursor-pointer gap-3 rounded-lg duration-200 ease-linear group-hover:shadow-lg">
          {/* Image */}
          <div className="relative">
            <img
              src={img_url}
              alt=""
              className="h-[300px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 p-2">
            {/* Title */}
            <div className="text-xl">{name}</div>
            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex text-yellow-500">
                {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                  <IoIosStar size={20} key={index} />
                ))}
                {rating % 1 != 0 && <IoIosStarHalf size={20} />}
                {Array.from({ length: Math.abs(Math.ceil(rating) - 5) }).map(
                  (_, index) => (
                    <IoIosStarOutline size={20} key={index} />
                  ),
                )}
              </div>
              <div className="">{rating}</div>
            </div>
            {/* Description */}
            <div className="h-[200px] overflow-hidden text-[1rem]">
              {description.split(" ").splice(0, 40).join(" ")}
            </div>
            {/* Cooking Time */}
            <div className="flex gap-2 text-[1rem]">
              <div className="font-semibold">Cooking Time:</div>
              {cooking_time}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCardFull;
