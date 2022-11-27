import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";
import { toast } from "react-toastify";

export const deleteDocument = async (id) => {
  const jwt = getAccessToken();
  return instance
    .delete(`/document/${id}`, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        toast.success("Document deleted successfully!");
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
