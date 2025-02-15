import { useContext, useEffect } from "react";
import { BiTag, BiTagAlt } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../components/context/RecipeContext";

const Recipe = () => {
  const { setRecipeID, singleRecipeData } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    setRecipeID(id);
  }, []);

  return (
    <>
      {singleRecipeData && (
        <div className="flex h-screen w-full flex-col items-center justify-between gap-4 p-4 md:flex-row md:items-start">
          <div className="w-[500px] md:w-full">
            <img src={singleRecipeData.img_url} alt="" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <div>
              <div className="text-3xl">{singleRecipeData.name}</div>
              <div className="flex gap-2 text-sm">
                <BsTag />
                <span>Filipino</span>
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
                  <li key={index} className="flex items-center gap-2">
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
      )}
      {/* {singleRecipeData && (
        <div className="grid grid-flow-col gap-10 p-10">
          <div className="w-[450px]">
            <img
              src={singleRecipeData.img_url}
              alt=""
              className="w-[450px] rounded-lg shadow-lg"
            />
          </div>

          <div className="grid bg-blue-50">
            <div className="text-3xl">
              {singleRecipeData.name}
              <div className="flex gap-2">
                <BsTag className="text-lg" />
                <span className="text-sm">Filipino</span>
              </div>
            </div>

            <div>{singleRecipeData.description}</div>
            <div>Source: {singleRecipeData.img_url}</div>
            <div>
              <span className="text-[1.2em]">Ingridients</span>
              <ul className="grid gap-3 pl-5">
                {singleRecipeData.ingridients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[1.2em]">Instructions</span>
              <ul className="grid gap-2">
                {singleRecipeData.instruction.map((item, index) => (
                  <li
                    key={index}
                    className="grid grid-flow-col justify-start gap-2"
                  >
                    <div className="grid h-[35px] w-[35px] items-center justify-center rounded-full border-2">
                      {index + 1}
                    </div>
                    <div className="grid items-center justify-center">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};
export default Recipe;
