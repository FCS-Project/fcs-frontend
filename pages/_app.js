/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import { wrapper } from "../store/configureStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, getRefreshToken } from "../lib/auth";
import { setTokensInState } from "../store/actions/auth";
import { getUser } from "../store/actions/user";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!auth?.access_token) {
      router.push("/login");
    }
  }, [auth]);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (getAccessToken() != "null" || getRefreshToken() != "null") {
        dispatch(setTokensInState(getAccessToken(), getRefreshToken()));
        dispatch(getUser());
      }
    }
  }, [dispatch]);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
