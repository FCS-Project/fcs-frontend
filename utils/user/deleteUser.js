import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const deleteUser = async (id) => {
  const jwt = getAccessToken();
  return instance
    .delete(`/user/${id}`, { headers: { Authorization: `Bearer ${jwt}` } })
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
