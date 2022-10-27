import authHeader from "../../store/services/auth-header";
import instance from "../axios";

export const getDocument = async (id) => {
  return instance
    .get(`/document${id}`, { headers: authHeader() })
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
