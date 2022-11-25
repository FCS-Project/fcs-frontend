import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getAllProducts = async () => {
  const jwt = getAccessToken();
  return instance
    .get("/product", { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.success) {
        return {
          success: response.success,
          data: response.data,
        };
      }
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
