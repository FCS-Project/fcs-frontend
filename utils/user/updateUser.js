import instance from "../axios";

export const updateUser = async (id) => {
  return instance
    .patch(`user/${id}`)
    .then((response) => {
      if (response.data.success) {
        return;
      }
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
