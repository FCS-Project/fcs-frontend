import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getAllProducts = async () => {
  const jwt = getAccessToken();
  return instance
    .get("/product", { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      console.log("respins>>>>", response);
      if (response.data.success) {
        return {
          success: response.data.success,
          data: response.data.data,
        };
      }
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
