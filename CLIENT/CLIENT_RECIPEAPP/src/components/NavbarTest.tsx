import MobileNavbar from "./Navbar/MobileNavbar";
import SearchBar from "./Navbar/SearchBar";
import WideNavbar from "./Navbar/WideNavbar";

const NavbarTest = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col gap-2 bg-white p-2 py-2 text-[0.85em]">
      <div>
        <WideNavbar />
      </div>
      <div>
        <MobileNavbar />
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
};

export default NavbarTest;
