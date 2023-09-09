import axios from './axiosService'
import {
  GET_ALL_BUSINESS,
  GET_ALL_CATEGORIES,
  GET_ALL_USERS,
  SET_RATING,
  SET_FILTERS,
  SET_UPLOAD_IMAGE,
  GET_USER_BY_ID,
  UPDATE_USER_DETAIL,
  GET_SELLER_BY_ID,
  UPDATE_SELLER_DETAIL,
  SET_AUTH,
  SET_USER_ID
} from './Action-Types'
import type { ServiceAction } from './types'

const API_URL = import.meta.env.VITE_SERVER_URL

export const setAuth: any = (isAuth: any) => ({
  type: SET_AUTH,
  payload: isAuth
})

export const setUserId: any = (id: any) => ({
  type: SET_USER_ID,
  payload: id
})

export const getAllBusiness = (): any => {
  const endpoint = `${API_URL}sellers`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint)
      dispatch({
        type: GET_ALL_BUSINESS,
        payload: data
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export const setFilter = (
  filter: string
): {
  type: string
  payload: string
} => {
  return {
    type: SET_FILTERS,
    payload: filter
  }
}

export const setRating = (
  rating: number
): {
  type: string
  payload: number
} => {
  return {
    type: SET_RATING,
    payload: rating
  }
}

export const setUploadImage = (
  image: string
): {
  type: string
  payload: string
} => {
  return {
    type: SET_UPLOAD_IMAGE,
    payload: image
  }
}

export const getCategories = (): any => {
  const endCategorie = `${API_URL}categories`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endCategorie)
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: data
      })
    } catch (error: any) {
      return { error: error.message }
    }
  }
}

export const postSeller: any = (payload: any) => {
  const endpoint = `${API_URL}sellers`

  return async function (_dispatch: any) {
    const response = await axios.post(endpoint, payload)
    return response
  }
}

export const postUser: any = (payload: any) => {
  const endpoint1 = `${API_URL}users`
  return async function (_dispatch: any) {
    try {
      const response = await axios.post(endpoint1, payload)
      return response
    } catch (error: any) {
      return { error: error.message }
    }
  }
}

export const getUsers: any = () => {
  const endUser = `${API_URL}users`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endUser)
      console.log(data)
      dispatch({
        type: GET_ALL_USERS,
        payload: data
      })
    } catch (error: any) {
      return error.message
    }
  }
}

export const postValidate: any = (payload: any) => {
  const endpointLogin = `${API_URL}users/login`
  return async function () {
    try {
      const response = await axios.post(endpointLogin, payload)

      localStorage.setItem('token', response.data.token)

      return response
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

// User Detail
export const getUserbyId: any = (id: string) => {
  const endpoint = `${API_URL}users/${id}`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint)

      dispatch({
        type: GET_USER_BY_ID,
        payload: data
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

export const updateUserInfo: any = (id: string, updateinfo: any) => {
  const endpoint = `${API_URL}users/${id}`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.put(endpoint, updateinfo)

      dispatch({
        type: UPDATE_USER_DETAIL,
        payload: data
      })
    } catch (error: any) {
      return { error: error.message }
    }
  }
}

// User Detail
export const getSellerbyId: any = (id: string) => {
  const endpoint = `${API_URL}sellers/${id}`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint)

      dispatch({
        type: GET_SELLER_BY_ID,
        payload: data
      })
    } catch (error: any) {
      return { error: error.message }
    }
  }
}

export const updateSellerInfo: any = (id: string, updateinfo: any) => {
  const endpoint = `${API_URL}sellers/${id}`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.put(endpoint, updateinfo)

      dispatch({
        type: UPDATE_SELLER_DETAIL,
        payload: data
      })
    } catch (error: any) {
      return { error: error.message }
    }
  }
}
