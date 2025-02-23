import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "./context/RecipeContext";

const Navbar = () => {
  const { userData } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token", "username"]);
  const [isMenu, setIsMenu] = useState(false);

  const [isUserNav, setIsUserNav] = useState(false);

  const handleLogout = () => {
    setCookies("access_token", "");
    setCookies("username", "");
    window.localStorage.removeItem("userID");
    navigate("/");
    setIsUserNav(false);
  };

  // const clickNewRecipe = () => {
  //   navigate("/create-recipe");
  // };

  const toggleMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    setIsMenu((prev) => !prev);
    if (navLinks?.classList.contains("top-[8%]")) {
      navLinks?.classList.add("top-[-100%]");
      navLinks?.classList.remove("top-[8%]");
    } else {
      navLinks?.classList.remove("top-[-100%]");
      navLinks?.classList.add("top-[8%]");
    }
    console.log(navLinks);
  };
  return (
    <>
      <header className="sticky top-0 z-50 bg-white py-2 text-[0.85em]">
        <nav className="mx-auto flex w-[92%] items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link to="/" className="flex items-center justify-between gap-2">
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
          <div className="nav-links absolute left-0 top-[-100%] z-50 flex min-h-[40vh] w-full items-center bg-white px-5 md:static md:min-h-fit md:w-auto">
            <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-[2vw]">
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-100">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-100">
                <Link className="" to="/all-recipes">
                  Recipes
                </Link>
              </li>
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-100">
                <Link className="" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <input
              type="text"
              className="rounded-full border-2 border-b-gray-400 px-3 py-1 outline-none"
              placeholder="Search.."
            />
          </div>
          <div className="flex items-center gap-5">
            {cookies.access_token != "" && userData && userData.img_url ? (
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
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // <div className="hidden items-center gap-2 md:flex">
              //   <div>Hi, {cookies.username}</div>
              //   <button
              //     className="rounded-full bg-gray-600 px-4 py-2 text-white duration-200 hover:opacity-90"
              //     onClick={handleLogout}
              //   >
              //     Logout
              //   </button>
              // </div>
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
            {isMenu ? (
              <CgClose
                onClick={toggleMenu}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <BiMenu
                onClick={toggleMenu}
                className="cursor-pointer text-2xl md:hidden"
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
