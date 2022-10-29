import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../store/actions/auth";

function Header() {
  const user = useSelector((state) => state.user.data);
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();
  const router = useRouter();
  const onClick = () => {
    dispatch(logout());
    router.push("/login");
  };
  const linkStyle =
    "text-sm md:text-md lg:text-lg transition all delay-30 hover:text-theme cursor-pointer";
  return (
    <div className="mb-10 bg-white top-0 sticky z-10 w-full px-4 md:px-3 lg:px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex justify-between items-center shadow">
      <Link href="/">
        <Logo />
      </Link>
      {user && (
        <div className="sm:pr-5 flex items-center flex-end gap-5 md:gap-8 lg:gap-10">
          <Link href="/">
            <p className={linkStyle}>Home</p>
          </Link>
          <Link href="/profile">
            <p className={linkStyle}>Profile</p>
          </Link>
          <p className={linkStyle} onClick={() => onClick()}>
            Logout
          </p>
        </div>
      )}
      {user?.roles[0] == "Admin" && (
        <div className="sm:pr-5 flex items-center flex-end gap-5 md:gap-8 lg:gap-10">
          <Link href="/">
            <p className={linkStyle}>Home</p>
          </Link>
          <Link href="/profile">
            <p className={linkStyle}>Profile</p>
          </Link>
          <p className={linkStyle} onClick={() => onClick()}>
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
