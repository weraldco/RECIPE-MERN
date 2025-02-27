import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="group relative flex md:flex xl:hidden">
      <input
        type="text"
        className="w-full rounded-full border border-gray-300 px-4 py-2 outline-none group-hover:border-blue-300"
        placeholder="Search Recipes.."
      />
      <button>
        <CiSearch
          className="absolute right-2 top-[7px] group-hover:text-blue-500"
          size={26}
        />
      </button>
    </div>
  );
};

export default SearchBar;
