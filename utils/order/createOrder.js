import instance from "../../axios";
import { getAccessToken } from "../../lib/auth";
import { toast } from "react-toastify";

export const createOrder = async (data) => {
  const jwt = getAccessToken();
  return instance
    .post("/order", data, { headers: { Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      if (response.data.success) {
        return {
          success: response.data.success,
          data: response.data.data,
          razorpayData: response.data.razorpayData,
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
