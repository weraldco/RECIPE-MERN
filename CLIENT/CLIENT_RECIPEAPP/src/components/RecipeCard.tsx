import { Link } from "react-router-dom";
import { RecipeItemProps } from "../method/types";

const RecipeCard = ({ recipe }: RecipeItemProps) => {
  const { _id, img_url, name } = recipe;
  return (
    <>
      <Link to={`/recipes/${_id}`}>
        <div className="z-20 grid cursor-pointer gap-3 duration-200 ease-linear hover:scale-110">
          <div>
            <img
              src={img_url}
              alt=""
              className="h-[300px] w-[190px] rounded-lg shadow-lg"
            />
          </div>
          <div className=" ">{name}</div>
        </div>{" "}
      </Link>
    </>
  );
};

export default RecipeCard;
