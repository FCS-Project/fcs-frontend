import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const createProduct = async (dto) => {
  const jwt = getAccessToken();
  return instance
    .post("/product", dto, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        return {
          success: response.data.success,
        };
      }
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
