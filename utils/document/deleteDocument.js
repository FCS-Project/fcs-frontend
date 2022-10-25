import instance from "../axios";

export const deleteDocument = async (id) => {
  return instance
    .delete(`/document/${id}`)
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
