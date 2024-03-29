import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";
import { toast } from "react-toastify";

export const deleteUser = async (id) => {
  const jwt = getAccessToken();
  return instance
    .delete(`/user/${id}`, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        toast.success("Removed user successfully!");
        return {
          success: response.data.success,
        };
      }
    })
    .catch((error) => {
      toast.error(error.message.toString());
      return {
        error: error.message,
      };
    });
};
