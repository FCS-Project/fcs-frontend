/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { logout } from "../../store/actions/auth";
import { emptyUser } from "../../store/actions/user";

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const onClick = () => {
    setOpen(false);
    dispatch(logout());
    dispatch(emptyUser());
    router.push("/login");
  };

  const linkStyle =
    "text-sm md:text-md lg:text-lg transition all delay-30 hover:text-theme cursor-pointer mb-5";

  const navItems = [
    { page: "Home", href: "/" },
    { page: "Shared Documents", href: "/documents" },
    { page: "Shop", href: "/shop" },
    { page: "Profile", href: "/profile" },
  ];

  const adminLinks = [
    { page: "Home", href: "/" },
    { page: "Shop", href: "/shop" },
    { page: "Users", href: "/users" },
    { page: "Organisations", href: "/organisations" },
    { page: "Profile", href: "/profile" },
  ];

  return (
    <div>
      {user?.data && (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon className="text-black" />
        </IconButton>
      )}
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="w-64 pt-5">
          {user && (
            <>
              {user?.data?.roles[0] == "Admin" ? (
                <div className="text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <img
                      alt="display"
                      src={
                        user?.data?.displaySrc == "" || !user?.data?.displaySrc
                          ? "/user.png"
                          : user?.data?.displaySrc
                      }
                      className="w-20 h-20 rounded-full object-cover border-2 border-theme"
                    />
                    <div className="text-theme">{user.data?.name}</div>
                  </div>
                  <Divider />
                  <div className="mt-5">
                    {adminLinks.map((item, i) => {
                      return (
                        <Link key={i} href={item.href} passHref={true}>
                          <p className={linkStyle}>{item.page}</p>
                        </Link>
                      );
                    })}
                    <p className={linkStyle} onClick={() => onClick()}>
                      Logout
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <img
                      alt="display"
                      src={
                        user?.data?.displaySrc == "" || !user?.data?.displaySrc
                          ? "/user.png"
                          : user?.data?.displaySrc
                      }
                      className="w-20 h-20 rounded-full object-cover border-2 border-theme"
                    />
                    <div className="text-theme">{user.data?.name}</div>
                  </div>
                  <Divider />
                  <div className="mt-5">
                    {navItems.map((item, i) => {
                      return (
                        <Link key={i} href={item.href} passHref={true}>
                          <p className={linkStyle}>{item.page}</p>
                        </Link>
                      );
                    })}
                    <p className={linkStyle} onClick={() => onClick()}>
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
