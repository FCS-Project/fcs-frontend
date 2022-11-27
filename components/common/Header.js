/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../store/actions/auth";
import { emptyUser } from "../../store/actions/user";
import DrawerComponent from "./Drawer";

function Header() {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const router = useRouter();
  const onClick = async () => {
    await dispatch(logout());
    await dispatch(emptyUser());
    router.push("/login");
  };
  const linkStyle =
    "text-sm md:text-md lg:text-lg transition all delay-30 hover:text-theme cursor-pointer hidden sm:flex";

  return (
    <div className="mb-10 bg-white top-0 sticky z-10 w-full px-4 md:px-3 lg:px-4 h-10 sm:h-11 md:h-12 lg:h-14 flex justify-between items-center shadow">
      <Logo />
      <div className="sm:pr-5 flex items-center flex-end gap-5 md:gap-8 lg:gap-10">
        {user && (
          <>
            {user?.roles[0] == "Admin" ? (
              <>
                <Link href="/" passHref={true}>
                  <p className={linkStyle}>Home</p>
                </Link>
                <Link href="/users" passHref={true}>
                  <p className={linkStyle}>Users</p>
                </Link>
                <Link href="/organisations" passHref={true}>
                  <p className={linkStyle}>Organisations</p>
                </Link>
                <Link href="/profile" passHref={true}>
                  <p className={linkStyle}>Profile</p>
                </Link>
                <p className={linkStyle} onClick={() => onClick()}>
                  Logout
                </p>
              </>
            ) : (
              <>
                <Link href="/" passHref={true}>
                  <p className={linkStyle}>Home</p>
                </Link>
                <Link href="/documents" passHref={true}>
                  <p className={linkStyle}>Shared Documents</p>
                </Link>
                <Link href="/shop" passHref={true}>
                  <p className={linkStyle}>Shop</p>
                </Link>
                <Link href="/profile" passHref={true}>
                  <p className={linkStyle}>Profile</p>
                </Link>
                <p className={linkStyle} onClick={() => onClick()}>
                  Logout
                </p>
              </>
            )}
          </>
        )}
      </div>
      <div className="block sm:hidden">
        <DrawerComponent />
      </div>
    </div>
  );
}

export default Header;
