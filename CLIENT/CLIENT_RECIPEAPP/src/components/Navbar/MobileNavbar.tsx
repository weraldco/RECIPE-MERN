import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/RecipeContext";
import UserMenu from "./UserNav";

const MobileNavbar = () => {
  const { userData, cookies } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <div className="flex flex-row items-center justify-between md:hidden xl:hidden">
          {/* Logo */}
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <img className="w-16" src="/img/logo.png" alt="" />
              {/* <div>
                <span className="font-sans text-[14px] font-bold">
                  SPOONFUL RECIPES
                </span>
                <p className="font-sans text-[10px]">created in React</p>
              </div> */}
            </Link>
          </div>

          {/* Menu bar */}
          <div className="flex gap-1 text-sm">
            <Link
              className="rounded-full px-2 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
              to="/"
            >
              Home
            </Link>
            <Link
              className="rounded-full px-2 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
              to="/all-recipes"
            >
              Recipes
            </Link>
            <Link
              className="rounded-full px-2 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
              to="/blogs"
            >
              Blogs
            </Link>
          </div>

          {/* Login Logout */}
          <div>
            {cookies?.access_token && cookies?.username && userData ? (
              <UserMenu />
            ) : (
              <div className="flex flex-row gap-4">
                <Link
                  className="rounded-full bg-blue-500 px-4 py-2 text-white duration-200 hover:bg-blue-400 active:bg-blue-500"
                  to="/login"
                >
                  Sign-in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
