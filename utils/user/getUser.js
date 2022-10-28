import authHeader from "../../store/services/auth-header";
import instance from "../axios";

export const getUser = async (id) => {
  return instance
    .get(`/user/${id}`, { headers: authHeader() })
    .then((response) => {
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
