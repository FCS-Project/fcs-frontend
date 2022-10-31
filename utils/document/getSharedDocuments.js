import instance from "../../axios";

export const getSharedDocuments = async () => {
  return instance
    .get("/document/shared")
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
