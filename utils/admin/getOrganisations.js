import instance from "../../axios";

export const getOrganisations = async () => {
  return instance
    .get("/user/admin/organisations")
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
