import axios from "./axiosService"; //{ AxiosResponse } from "axios";
import {
  GET_ALL_BUSINESS,
  GET_ALL_CATEGORIES,
  GET_ALL_USERS,
  SET_RATING,
  SET_FILTERS,
  SET_UPLOAD_IMAGE,
  GET_USER_BY_ID,
  UPDATE_USER_DETAIL,
} from "./Action-Types";
import type { ServiceAction } from "./types";

const API_URL = 'http://localhost:3001/'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR0lPVkEiLCJpZCI6IjY0ZjdkNDRlNGI1MmVjODRjMjJhMzEzYyIsImlhdCI6MTY5Mzk2MzQzMH0.Kc3ArXiNzFPWaA23NnrIk4VEQI2LPxCSvXI3b1QnIpg'
localStorage.setItem('token', token)

export const GetAllBusiness = (): ((
  dispatch: (action: ServiceAction) => void
) => Promise<void>) => {
  const endpoint = `${API_URL}sellers`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_ALL_BUSINESS,
        payload: data,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const setFiler = (
  filter: string
): {
  type: string;
  payload: string;
} => {
  return {
    type: SET_FILTERS,
    payload: filter,
  };
};

export const setRating = (
  rating: number
): {
  type: string;
  payload: number;
} => {
  return {
    type: SET_RATING,
    payload: rating,
  };
};

export const setUploadImage = (
  image: string
): {
  type: string;
  payload: string;
} => {
  return {
    type: SET_UPLOAD_IMAGE,
    payload: image,
  };
};

export const getCategories = (): ((
  dispatch: (action: ServiceAction) => void
) => Promise<void>) => {
  const endCategorie = `${API_URL}categories`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endCategorie);

      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: data,
      });
    } catch (error: any) {
      console.log("Error en el getCategories");
    }
  };
};

export const postSeller = (payload: any) => {
  const endpoint = `${API_URL}sellers`;

  return async function (dispatch: any) {
    let json = await axios.post(endpoint, payload);
    return json;
  };
};

export const postUser = (payload: any) => {
  const endpoint1 = `${API_URL}users`;
  return async function (dispatch: any) {
    let json1 = await axios.post(endpoint1, payload);
    return json1;
  };
};

export const getUsers = (): ((
  dispatch: (action: ServiceAction) => void
) => Promise<void>) => {
  const endUser = `${API_URL}users`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endUser);

      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } catch (error: any) {
      console.log("Error en el getUsers");
    }
  };
};

export const postValidate = (payload: any) => {
  const endpointLogin = `${API_URL}users/login`;
  return async function () {
    const jsonLogin = await axios.post(endpointLogin, payload);
    const token = jsonLogin.data.token;
    //const id = jsonLogin.data.id
    localStorage.setItem("token", token);
    const prueba = localStorage.getItem("token");
    console.log(prueba);
    return jsonLogin;
  };
};

// User Detail
export const getUserbyId: any = (id: string) => {
  const endpoint = `${API_URL}users/${id}`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const updateUserInfo: any = (id: string, updateinfo: any) => {
  const endpoint = `${API_URL}users/${id}`;

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR0lPVkEiLCJpZCI6IjY0ZjdkNDRlNGI1MmVjODRjMjJhMzEzYyIsImlhdCI6MTY5Mzk2MzQzMH0.Kc3ArXiNzFPWaA23NnrIk4VEQI2LPxCSvXI3b1QnIpg";

      const { data } = await axios.put(endpoint, updateinfo, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: UPDATE_USER_DETAIL,
        payload: data,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};
