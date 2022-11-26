import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const updateOrder = async (data, id) => {
  const jwt = getAccessToken();
  return instance
    .patch(`order/${id}`, data, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((response) => {
      console.log("response>>>>", response);
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
