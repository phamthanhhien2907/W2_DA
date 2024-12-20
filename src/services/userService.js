import axiosConfig from "../axios";
export const apiGetAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/users",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiAddToCart = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/users/addToCart",
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/users/getUserById/" + id,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiDeleteUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/users/delete/" + id,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetCurrent = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/get-current",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUpdatedUser = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/users/update/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUpdatedDesposit = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/users/createDeposit/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdatedStatusWithDraw = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/users/updateWithDraw/${id}`,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiCreateUser = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: `/users/create`,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUpdateWithDraw = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/users/withDrawUser/${id}`,
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetMyWithDraw = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/users/mywithDraw`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetMyDeposit = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/users/myDeposit`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetAllDeposit = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/users/getDeposit`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetAllWithDraw = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/users/getwithDraw`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
