/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import { wrapper } from "../store/configureStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, getRefreshToken } from "../lib/auth";
import { setTokensInState } from "../store/actions/auth";
import { getUser } from "../store/actions/user";
import { useRouter } from "next/router";
import SEO from "../components/common/SEO";

function MyApp({ Component, pageProps }) {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    const publicPaths = ["/login", "/signup", "/shop"];
    if (
      (!auth?.access_token || !user.data) &&
      !publicPaths.includes(path ?? "")
    ) {
      router.push("/login");
    }
  }, [auth, user]);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (getAccessToken() != "null" || getRefreshToken() != "null") {
        dispatch(setTokensInState(getAccessToken(), getRefreshToken()));
        dispatch(getUser());
      }
    }
  }, [dispatch]);
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
