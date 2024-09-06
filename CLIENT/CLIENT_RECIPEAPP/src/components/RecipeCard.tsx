import { RecipeItemProps } from "../method/types";

const RecipeCard = ({ recipe }: RecipeItemProps) => {
  return (
    <>
      <div className="z-20 grid gap-3 duration-200 ease-linear hover:scale-110">
        <div>
          <img
            src={recipe.img_url}
            alt=""
            className="h-[300px] w-[190px] rounded-lg shadow-lg"
          />
        </div>
        <div className=" ">{recipe.name}</div>
      </div>
    </>
  );
};

export default RecipeCard;
