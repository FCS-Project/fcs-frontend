import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const createOrder = async (data) => {
  const jwt = getAccessToken();
  return instance
    .post("/order", data, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      console.log("response>>>>", response);
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
