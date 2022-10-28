import instance from "../../axios";

export const getProfile = (id) => {
  return instance
    .get(`/user/profile/${id}`)
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
