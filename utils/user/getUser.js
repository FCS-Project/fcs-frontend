import instance from "../axios";

// authorization bearer jwt needs to be done
export const getUser = async (id) => {
  return instance
    .get(`/user/${id}`)
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
