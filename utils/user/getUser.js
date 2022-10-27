import authHeader from "../../store/services/auth-header";
import instance from "../axios";

// authorization bearer jwt needs to be done
export const getUser = async (id) => {
  //   const {
  //     accessToken: { jwtToken },
  //   } = await Auth.currentSession();
  return instance
    .get(`/user/${id}`, { headers: authHeader() })
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
