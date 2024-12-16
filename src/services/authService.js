import axiosConfig from "../axios";
export const apiRegister = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/register",
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiLoginSuccess = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/generateToken",
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apichangePassword = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/auth/changePassword/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
