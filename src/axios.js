import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});
instance.interceptors.request.use(
  function (config) {
    const token =
      window.localStorage.getItem("persist:auth") &&
      JSON.parse(window.localStorage.getItem("persist:auth"))?.token.slice(
        1,
        -1
      );
    if (token) {
      console.log("Sending request with token:", token); // Debug token
      config.headers = { authorization: `Bearer ${token}` };
    }

    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return error?.response?.data;
  }
);
export default instance;
