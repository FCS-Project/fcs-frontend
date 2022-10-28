import instance from "../../axios";

export const logout = async () => {
  return instance
    .post("/auth/logout", {})
    .then((response) => {
      if (response.data.success) {
        localStorage.removeItem("user");
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
