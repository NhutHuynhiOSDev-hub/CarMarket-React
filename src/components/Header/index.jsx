import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav.jsx";

import { Link } from "react-router";

function Header() {
  return (
    <div className="fixed bg-black w-full flex justify-between items-center shadow-sm px-10 md:px-20 py-5 z-20">
      <Link to={"/"}>
        <img src="vite.svg" className="logo" alt="logo" />
      </Link>
      <DesktopNav />
      <MobileNav />
    </div>
  );
}

export default Header;
