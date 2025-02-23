import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { RecipeItemProps } from "../method/types";

const RecipeCardFull = ({ recipe }: RecipeItemProps) => {
  const { _id, img_url, name, description, cooking_time, rating } = recipe;
  console.log();
  return (
    <>
      <Link to={`/recipes/${_id}`}>
        <div className="z-20 grid cursor-pointer gap-3 duration-200 ease-linear">
          {/* Image */}
          <div>
            <img
              src={img_url}
              alt=""
              className="h-[300px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2">
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
              <div className="bg-blue-100">{rating}</div>
            </div>
            {/* Description */}
            <div className="h-[200px] overflow-hidden text-[1rem]">
              {description.split(" ").splice(0, 50).join(" ")}
            </div>
            {/* Cooking Time */}
            <div className="flex gap-2 text-[1rem]">
              <div className="font-semibold">Cooking Time:</div>
              {cooking_time}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCardFull;
