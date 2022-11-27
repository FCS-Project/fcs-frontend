import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";
import { toast } from "react-toastify";

export const createProduct = async (dto) => {
  const jwt = getAccessToken();
  return instance
    .post("/product", dto, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        toast.success("Product created successfully");
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
