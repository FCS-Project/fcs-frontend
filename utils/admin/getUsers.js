import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getUsers = async () => {
  const jwt = getAccessToken();
  return instance
    .get("/user/admin/users", {
      headers: { Authorization: `Bearer ${jwt}` },
    })
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
