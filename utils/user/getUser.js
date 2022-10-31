import { getAccessToken } from "../../lib/auth";
import instance from "../axios";

export const getUser = async (id) => {
  const jwt = getAccessToken();
  return instance
    .get(`/user/${id}`, { headers: { Authorization: `Bearer ${jwt}` } })
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
