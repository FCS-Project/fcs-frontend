import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";

export const verifyOtp = async (dto) => {
  const jwt = getAccessToken();
  return instance
    .post("/auth/verify-otp", dto, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
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
