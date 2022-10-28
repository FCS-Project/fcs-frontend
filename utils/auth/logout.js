import instance from "../../axios";

export const logout = async () => {
  //   const {
  //     accessToken: { jwtToken },
  //   } = await Auth.currentSession();
  return instance
    .post("/auth/logout", {
      //   headers: {
      //     Authorization: `Bearer ${jwt}`,
      //   },
    })
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
