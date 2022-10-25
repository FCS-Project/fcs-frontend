import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <div className="bg-white top-0 fixed z-10 w-full px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-between shadow">
      <Link href="/">
        <Logo />
      </Link>
      {/* <div className="flex items-center flex-end gap-4">
        <Link href="/">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/login">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Login
          </p>
        </Link>
        <Link href="/signup">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Signup
          </p>
        </Link>
      </div> */}
    </div>
  );
}

export default Header;
