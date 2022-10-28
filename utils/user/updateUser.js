import instance from "../../axios";

export const updateUser = async (id) => {
  return instance
    .patch(`user/${id}`)
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
