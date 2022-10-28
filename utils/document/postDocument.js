import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const getDocument = async (dto) => {
  const jwt = getAccessToken();
  return instance
    .get(`/document`, dto, { headers: { Authorization: `Bearer ${jwt}` } })
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
