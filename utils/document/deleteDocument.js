import authHeader from "../../store/services/auth-header";
import instance from "../axios";

export const deleteDocument = async (id) => {
  return instance
    .delete(`/document/${id}`, { headers: authHeader() })
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
