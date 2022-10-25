import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function DashboardHeader() {
  const linkStyle =
    "text-sm md:text-md lg:text-lg transition all delay-30 hover:text-theme cursor-pointer";
  return (
    <div className="mb-3 bg-white top-0 sticky z-10 w-full px-2 md:px-3 lg:px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex justify-between items-center shadow">
      <Link href="/">
        <Logo />
      </Link>
      <div className="pr-3 sm:pr-5 flex items-center flex-end gap-3.5 md:gap-4 lg:gap-5">
        <Link href="/">
          <p className={linkStyle}>Home</p>
        </Link>
        <Link href="/profile">
          <p className={linkStyle}>Profile</p>
        </Link>
        <Link href="/">
          <p className={linkStyle}>Logout</p>
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
