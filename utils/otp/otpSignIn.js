import instance from "../../axios";
import { toast } from "react-toastify";

export const otpSignIn = async (dto) => {
  return instance
    .post("/auth/otp-signin", dto)
    .then((response) => {
      if (response.data.success) {
        toast.success("OTP has been sent.");
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
