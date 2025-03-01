import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryT } from "../method/types";
import { GlobalContext } from "./context/RecipeContext";

const CategoryList = () => {
  const { categoryData } = useContext(GlobalContext);

  return (
    <>
      {categoryData && (
        <div className="grid w-full grid-flow-row grid-cols-3 items-center justify-center gap-5 px-5 md:h-[150px] md:grid-cols-6 xl:w-full">
          {categoryData.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryList;

type CategoryCardProps = {
  category: CategoryT;
};
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <>
      <Link to={`recipes/category/${category.name.toLowerCase()}`}>
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
      </Link>
    </>
  );
};
