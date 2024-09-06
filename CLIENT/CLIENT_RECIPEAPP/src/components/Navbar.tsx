import { useState } from "react";
import { useCookies } from "react-cookie";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token", "username"]);
  const [isMenu, setIsMenu] = useState(false);

  const handleLogout = () => {
    setCookies("access_token", "");
    setCookies("username", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  const clickNewRecipe = () => {
    navigate("/create-recipe");
  };
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

  // console.log(isMenu);
  return (
    <>
      <header className="bg-white py-2 text-[0.85em]">
        <nav className="mx-auto flex w-[92%] items-center justify-between">
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
          <div className="nav-links absolute left-0 top-[-100%] z-50 flex min-h-[40vh] w-full items-center bg-white px-5 md:static md:min-h-fit md:w-auto">
            <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-[2vw]">
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-200">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-200">
                <Link className="" to="/">
                  Recipes
                </Link>
              </li>
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-200">
                <Link className="" to="/">
                  Blogs
                </Link>
              </li>
              <li className="rounded-full px-3 py-2 text-center transition-all hover:bg-gray-200">
                {/* {cookies.access_token && ( */}
                <Link className="" to="/my-favorite">
                  Favorites
                </Link>
                {/* )} */}
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
            <Link
              className="rounded-full bg-blue-400 px-3 py-2 text-white transition-all hover:bg-blue-300"
              to="/login`"
            >
              Sign in?
            </Link>
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
