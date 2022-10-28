import axios from "axios";
import { BASE_API_URL, REFRESH_TOKEN } from "./constants";
import {
  clearAuthToken,
  getCookie,
  getRefreshToken,
  setAccessToken,
} from "./lib/auth";

const instance = axios.create({
  timeout: 15000,
  baseURL: BASE_API_URL,
  headers: {
    token: getCookie(),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === BASE_API_URL + REFRESH_TOKEN
    ) {
      return Promise.reject(error);
    }
    const errData = error.response.data;
    if (error?.response?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
          const now = Math.ceil(Date.now() / 1000);
          if (tokenParts.exp > now) {
            return instance
              .post(API_URL + REFRESH_TOKEN, {
                headers: { Authorzation: `Bearer ${refreshToken}` },
              })
              .then((response) => {
                setAccessToken(response.data.access_token);
                instance.defaults.headers.common["token"] =
                  response.data.access_token;
                originalRequest.headers["token"] = response.data.access_token;
                return instance(originalRequest);
              })
              .catch((err) => {
                return {
                  err: err.message,
                };
                // console.log('Caught error', err);
              });
          } else {
            clearAuthToken();
            axios.defaults.headers.common["token"] = "";
            window.location.replace(window.location.origin);
          }
        } catch (e) {
          // console.log('Error here', e);
          return Promise.reject(error);
        }
      } else {
        // console.log('Refresh token not available.');
        clearAuthToken();
        // window.location.href = '/login/';
      }
    } else {
      // console.log(
      // 	'Else condition error',
      // 	error,
      // 	error.response,
      // 	errData,
      // 	typeof errData
      // );
    }
    // console.log('General error', error);
    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default instance;
