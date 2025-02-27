/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState<string>("");
  const [recipeDescription, setRecipeDescription] = useState<string>("");
  const [recipeImgURL, setRecipeImgURL] = useState<string>("");
  const [recipeCookingTime, setRecipeCookingTime] = useState<string>("");
  const [ingridientsList, setIngridientsList] = useState(new Array(1).fill(""));
  const [instructionsList, setInstructionsList] = useState(
    new Array(1).fill(""),
  );
  const [cookies] = useCookies<string>(["username"]);
  const recipeAuthor = cookies.username;
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSuccess("");

      const rawData = {
        recipeName,
        recipeDescription,
        recipeImgURL,
        recipeCookingTime,
        ingridientsList,
        instructionsList,
        recipeAuthor,
      };
      console.log(rawData);

      const response = await axios.post(
        "http://localhost:3001/recipes/create",
        rawData,
      );
      if (response.status === 200) {
        setError("");
        setSuccess("Successfully added new recipe.");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (success !== "") {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [success]);

  return (
    <>
      <div className="grid h-screen place-content-center">
        <div className="grid gap-3">
          <h1 className="text-2xl font-bold">Create Recipe</h1>
          {error && <div className="text-red-400">{error}</div>}
          {success && <div className="text-green-400">{success}</div>}
          <form className="grid w-[450px] gap-3" onSubmit={handleFormSubmit}>
            <FormTextField
              label="Recipe name"
              placeholder="Enter recipe name.."
              stateName={recipeName}
              setStateValue={setRecipeName}
            />
            <FormTextField
              label="Recipe description"
              placeholder="Enter recipe description.."
              stateName={recipeDescription}
              setStateValue={setRecipeDescription}
            />{" "}
            <FormTextField
              label="Recipe category"
              placeholder="Category of your recipe.."
              stateName={recipeName}
              setStateValue={setRecipeName}
            />
            <FormMultipleTextfield
              label="Ingridients"
              placeholder="Enter recipe.."
              stateList={ingridientsList}
              setStateList={setIngridientsList}
            />
            <FormMultipleTextfield
              label="Instructions"
              placeholder="Enter instructions.."
              stateList={instructionsList}
              setStateList={setInstructionsList}
            />
            <FormTextField
              label="Img Url"
              placeholder="Enter img Url.."
              stateName={recipeImgURL}
              setStateValue={setRecipeImgURL}
            />
            <FormTextField
              label="Cooking Time"
              placeholder="Enter cooking time.."
              stateName={recipeCookingTime}
              setStateValue={setRecipeCookingTime}
            />
            <button
              type="submit"
              className="bg-blue-500 p-3 text-white hover:bg-blue-400 active:bg-blue-500"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

type FormTextField = {
  label: string;
  placeholder: string;
  stateName: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
};

const FormTextField = ({
  label,
  placeholder,
  stateName,
  setStateValue,
}: FormTextField) => {
  return (
    <>
      <div className="grid">
        <label className="text-sm">{label}</label>
        <input
          type="text"
          className="bg-slate-200 p-2"
          placeholder={placeholder}
          value={stateName}
          onChange={(e) => {
            setStateValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

type FormMultipleTextfieldProps = {
  label: string;
  placeholder: string;
  stateList: string[];
  setStateList: React.Dispatch<React.SetStateAction<string[]>>;
};

const FormMultipleTextfield = ({
  label,
  placeholder,
  stateList,
  setStateList,
}: FormMultipleTextfieldProps) => {
  const handleOnClick = () => {
    const copyIngridientList = [...stateList];
    copyIngridientList.push("");
    setStateList(copyIngridientList);
  };
  return (
    <>
      <div className="grid">
        <label className="text-sm">{label}</label>
        <ul className="grid gap-3">
          {stateList.map((_, index) => (
            <li key={index} className="grid">
              <input
                type="text"
                className="bg-slate-200 p-2"
                placeholder={placeholder}
                value={stateList[index]}
                onChange={(e) => {
                  const copyArrList = [...stateList];
                  copyArrList[index] = e.target.value;
                  setStateList(copyArrList);
                }}
              />
            </li>
          ))}
        </ul>
        <div
          onClick={handleOnClick}
          className="mt-3 cursor-pointer border-2 border-gray-700 p-2 text-gray-700"
        >
          Add more {label}
        </div>
      </div>
    </>
  );
};
