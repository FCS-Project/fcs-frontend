import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getProfile = (id) => {
  const jwt = getAccessToken();
  return instance
    .get(`/user/profile/${id}`, { headers: { Authorization: `Bearer ${jwt}` } })
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
