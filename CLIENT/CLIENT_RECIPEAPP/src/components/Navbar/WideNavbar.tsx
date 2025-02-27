import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/RecipeContext";
import UserMenu from "./UserNav";

const WideNavbar = () => {
  const { userData, cookies } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState<string>("");
  console.log(searchQuery);
  return (
    <div className="hidden flex-row items-center justify-between md:flex xl:flex">
      {/* Logo */}
      <div className="">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-16" src="/img/logo.png" alt="" />
          <div>
            <span className="font-sans text-[14px] font-bold">
              SPOONFUL RECIPES
            </span>
            <p className="font-sans text-[10px]">created in React</p>
          </div>
        </Link>
      </div>

      {/* Menu bar */}
      <div className="flex gap-6">
        <Link
          className="rounded-full px-4 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="rounded-full px-4 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
          to="/all-recipes"
        >
          Recipes
        </Link>
        <Link
          className="rounded-full px-4 py-2 duration-200 hover:bg-gray-200 active:bg-gray-300"
          to="/blogs"
        >
          Blogs
        </Link>
      </div>

      {/* Search */}
      <div className="group relative hidden md:hidden xl:flex">
        <form action={`/search/${searchQuery}`}>
          <input
            type="text"
            className="w-[300px] rounded-full border border-gray-400 px-4 py-2 outline-none group-hover:border-blue-400"
            placeholder="Search Recipes.."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit">
            <CiSearch className="absolute right-2 top-[7px]" size={26} />
          </button>
        </form>
      </div>

      {/* Login Logout */}
      <div>
        {cookies.access_token && cookies.username && userData ? (
          <UserMenu />
        ) : (
          <div className="flex flex-row gap-4">
            <Link
              className="rounded-full bg-gray-300 px-4 py-2 duration-200 hover:bg-gray-400 active:bg-gray-200"
              to="/registration"
            >
              Want to join?
            </Link>
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
  );
};

export default WideNavbar;
