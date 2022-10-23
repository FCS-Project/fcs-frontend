import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div className="bg-white top-0 fixed z-10 w-full px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center shadow">
      <Logo />
    </div>
  );
}

export default Header;