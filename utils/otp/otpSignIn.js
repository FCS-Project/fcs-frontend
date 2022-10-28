import instance from "../../axios";

export const otpSignIn = async (dto) => {
  return instance
    .post("/auth/otp-signin", dto)
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
