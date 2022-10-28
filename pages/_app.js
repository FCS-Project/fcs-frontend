import "../styles/globals.css";
import { wrapper } from "../store/configureStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken, getRefreshToken } from "../lib/auth";
import { setTokensInState } from "../store/actions/auth";
import { getUser } from "../store/actions/user";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (getAccessToken() || getRefreshToken()) {
        // User may not be authenticated, found tokens so set them in state and get user data if it is not present already
        dispatch(setTokensInState(getAccessToken(), getRefreshToken()));
        dispatch(getUser());
      }
    }
  }, [dispatch]);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
