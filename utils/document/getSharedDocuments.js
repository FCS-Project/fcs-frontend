import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";
import { toast } from "react-toastify";

export const getSharedDocuments = async () => {
  const jwt = getAccessToken();
  return instance
    .get("/document/shared", { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        return {
          success: response.data.success,
          data: response.data.data,
        };
      }
    })
    .catch((error) => {
      toast.error(error);
      return {
        error: error.message,
      };
    });
};
