import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
export default function DrawerComponent() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.data);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const onClick = () => {
    dispatch(logout());
    dispatch(emptyUser());
    router.push("/login");
  };

  const linkStyle =
    "text-sm md:text-md lg:text-lg transition all delay-30 hover:text-theme cursor-pointer mb-5";

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="w-[40vw] p-5">
          {user && (
            <>
              {user?.roles[0] == "Admin" ? (
                <>
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
      </Drawer>
    </div>
  );
}
