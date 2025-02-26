import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="relative flex md:flex xl:hidden">
      <input
        type="text"
        className="w-full rounded-full border border-gray-300 px-4 py-2 outline-none"
        placeholder="Search Recipes.."
      />
      <CiSearch className="absolute right-2 top-[7px]" size={26} />
    </div>
  );
};

export default SearchBar;
