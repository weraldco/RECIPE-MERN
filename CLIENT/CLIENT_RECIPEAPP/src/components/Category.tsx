import { useContext } from "react";
import { CategoryT } from "../method/types";
import { GlobalContext } from "./context/RecipeContext";

const Category = () => {
  const { categoryData } = useContext(GlobalContext);

  return (
    <>
      <div className="grid h-[150px] w-full grid-flow-col items-center justify-center gap-5 overflow-x-scroll px-5 xl:w-full">
        {categoryData.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Category;

type CategoryCardProps = {
  category: CategoryT;
};
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <>
      <div className="grid cursor-pointer gap-2 text-center text-sm transition-all hover:scale-110">
        <div>
          <img
            src={category.img_url}
            alt=""
            className="grid h-[90px] w-[190px] rounded-lg shadow-md"
          />
        </div>
        {category.name}
      </div>
    </>
  );
};
