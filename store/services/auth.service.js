import instance from "../../utils/axios";
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login = async (dto) => {
    return instance
      .post("/auth/signin", dto)
      .then((response) => {
        console.log(response);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
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

  logout = async () => {
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

  signup = async (dto) => {
    return instance
      .post("/auth/signup", dto)
      .then((response) => {
        console.log(response);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
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
}

export default new AuthService();
