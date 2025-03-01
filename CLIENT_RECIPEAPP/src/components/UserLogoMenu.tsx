import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/RecipeContext";

const UserLogoMenu = () => {
  const { cookies, userData, logOutUser } = useContext(GlobalContext);

  const [isUserNav, setIsUserNav] = useState(false);

  return (
    <div>
      {cookies?.access_token != "" && userData && userData.img_url ? (
        <div>
          <div
            className="flex cursor-pointer flex-row items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-gray-100"
            onClick={() => {
              setIsUserNav((prev) => !prev);
            }}
          >
            <div className="rounded-full border-2">
              <img
                src={userData.img_url}
                alt=""
                className="w-[38px] rounded-full object-contain"
              />
            </div>
            <span className="text-sm">Hi, {userData.username}</span>
          </div>
          {isUserNav && (
            <div className="absolute z-50 bg-white p-2 text-sm">
              <div className="flex flex-col gap-2">
                <Link
                  to="/my-recipes"
                  className="w-full cursor-pointer px-8 py-1 duration-200 hover:bg-gray-100"
                  onClick={() => setIsUserNav((prev) => !prev)}
                >
                  My Recipe
                </Link>
                <Link
                  to="/my-favorites"
                  className="w-full cursor-pointer px-8 py-1 duration-200 hover:bg-gray-100"
                  onClick={() => setIsUserNav((prev) => !prev)}
                >
                  My Favorite
                </Link>
                <Link
                  to="/create-recipe"
                  className="w-full cursor-pointer px-8 py-1 duration-200 hover:bg-gray-100"
                  onClick={() => setIsUserNav((prev) => !prev)}
                >
                  Create Recipe
                </Link>
                <button
                  className="w-full cursor-pointer px-8 py-1 duration-200 hover:bg-gray-100"
                  onClick={logOutUser}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="hidden gap-2 md:flex">
          <Link
            className="rounded-full bg-gray-600 px-3 py-2 text-white transition-all hover:bg-gray-500"
            to="/registration"
          >
            Want to join?
          </Link>
          <Link
            className="rounded-full bg-blue-400 px-3 py-2 text-white transition-all hover:bg-blue-300"
            to="/login"
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserLogoMenu;
