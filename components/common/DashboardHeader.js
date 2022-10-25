import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function DashboardHeader() {
  return (
    <div className="bg-white top-0 sticky z-10 w-full px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex justify-between items-center shadow">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center flex-end gap-4">
        <Link href="/">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/profile">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Profile
          </p>
        </Link>
        <Link href="/">
          <p className="transition all delay-30 hover:text-theme cursor-pointer">
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
