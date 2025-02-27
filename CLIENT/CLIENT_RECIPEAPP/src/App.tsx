import { useCookies } from "react-cookie";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarTest from "./components/NavbarTest";
import { AllRecipes } from "./pages/AllRecipes";
import Blogs from "./pages/Blogs";
import Category from "./pages/Category";
import { CreateRecipe } from "./pages/CreateRecipe";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyRecipes from "./pages/MyRecipes";
import NotFoundPage from "./pages/NotFoundPage";
import Recipe from "./pages/Recipe";
import Registration from "./pages/Register";
import Search from "./pages/Search";

function App() {
  const [cookies] = useCookies<string>(["access_token"]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full bg-slate-50 xl:w-[1280px]">
          <NavbarTest />
          <Routes>
            <Route path="/" element={<Home />} />
            {cookies.access_token !== "" && (
              <>
                <Route path="/my-recipes" element={<MyRecipes />}></Route>
                <Route path="/my-favorites" element={<Favorites />} />
                <Route path="/create-recipe" element={<CreateRecipe />} />
              </>
            )}
            <Route path="/all-recipes" element={<AllRecipes />} />
            <Route path="/blogs" element={<Blogs />} />

            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/recipes/category/:category" element={<Category />} />

            <Route path="/search/:query" element={<Search />}></Route>

            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
