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

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;

//     // console.log('In error function !\n');
//     if (typeof error.response === "undefined") {
//       return Promise.reject(error);
//     }

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === BASE_API_URL + REFRESH_TOKEN
//     ) {
//       // window.location.href = '/login/';
//       return Promise.reject(error);
//     }
//     // const newData = jwt.decode(error.response.data.payload);
//     // if (newData) {
//     // 	error.response.data = newData;
//     // }

//     const errData = error.response.data;
//     // console.log('In error function v2!\n', newData, errData, error.response);
//     if (error?.response?.status === 401) {
//       // console.log('Unauthorized, need to refresh token.', getRefreshToken());
//       const refreshToken = getRefreshToken();

//       if (refreshToken) {
//         try {
//           const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

//           // exp date in token is expressed in seconds, while now() returns milliseconds:
//           const now = Math.ceil(Date.now() / 1000);
//           // console.log(tokenParts.exp);

//           if (tokenParts.exp > now) {
//             return instance
//               .post(API_URL + REFRESH_TOKEN, {
//                 headers: { Authorzation: `Bearer refreshToken` }
//               })
//               .then((response) => {
//                 // console.log('Refresh token success', response);
//                 setAccessToken(response.data.access_token);
//                 instance.defaults.headers.common["token"] =
//                   response.data.access;
//                 originalRequest.headers["token"] = response.data.access_token;

//                 // console.log('Refresh token success complete', response);
//                 return instance(originalRequest);
//               })
//               .catch((err) => {
//                 // console.log('Caught error', err);
//               });
//           } else {
//             // console.log('Refresh token fail');
//             clearAuthToken();
//             axios.defaults.headers.common["token"] = "";
//             // await new Promise(() => {
//             // 	setTimeout(() => {
//             // 		window.location.href =
//             // 			'/login/?from=' + window.location.pathname;
//             // 	}, 5000);
//             // });
//             window.location.replace(window.location.origin);
//           }
//         } catch (e) {
//           // console.log('Error here', e);
//           return Promise.reject(error);
//         }
//       } else {
//         // console.log('Refresh token not available.');
//         clearAuthToken();
//         // window.location.href = '/login/';
//       }
//     } else {
//       // console.log(
//       // 	'Else condition error',
//       // 	error,
//       // 	error.response,
//       // 	errData,
//       // 	typeof errData
//       // );
//     }
//     // console.log('General error', error);
//     // specific error handling done elsewhere
//     return Promise.reject(error);
//   }
// );

export default instance;
