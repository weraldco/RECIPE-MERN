import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="group relative flex md:flex xl:hidden">
      <input
        type="text"
        className="w-full rounded-full border border-gray-400 px-4 py-2 outline-none group-hover:border-blue-400"
        placeholder="Search Recipes.."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Link to={`/search/${searchQuery}`}>
        <CiSearch className="absolute right-2 top-[7px]" size={26} />
      </Link>
    </div>
  );
};

export default SearchBar;
