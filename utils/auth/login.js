import instance from "../axios";

export const login = async (dto) => {
  return instance
    .post("/auth/signin", dto)
    .then((response) => {
      console.log(response);
      if (response.data) {
        return {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        error: error.message,
      };
    });
};