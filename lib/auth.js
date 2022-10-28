import Cookies from "js-cookie";

export const isLoggedIn = () => Cookies.get("cookie") !== undefined;
export const getAccessToken = () => Cookies.get("access_token");
export const getCookie = () => Cookies.get("access_token");
export const setAccessToken = (key) =>
  Cookies.set("access_token", key, { expires: 1 });
export const setCookie = (key) =>
  Cookies.set("cookie", key, { sameSite: "none", secure: true });
export const getRefreshToken = () => Cookies.get("refresh_token");
export const setRefreshToken = (key) =>
  Cookies.set("refresh_token", key, { expires: 3 });

export const clearAuthToken = () => {
  // setCookie(null);
  // setAgency(null);
  // setAccessToken(null);
  // setRefreshToken(null);
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  Cookies.remove("cookie");
  Cookies.remove("agency");
};
