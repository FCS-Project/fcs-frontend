import instance from "./axios";

export const getUser = async (id) => {
  return instance.get(`/user/${id}`).then((response) => {
    if (response.data.success) {
      return {
        success: response.data.success,
        data: response.data.data,
      };
    }
  });
};
