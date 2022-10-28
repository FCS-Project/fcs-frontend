import instance from "../axios";
import { useSelector } from "react-redux";

export const deleteDocument = async (id) => {
  return instance
    .delete(`/document/${id}`, { headers: { Authorization: user } })
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
