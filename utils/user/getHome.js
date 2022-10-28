import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getHome = async () => {
  const jwt = getAccessToken();
  return instance
    .get("/user/home", { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        return {
          success: response.data.success,
          response: response.data.data,
        };
      }
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
