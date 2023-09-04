import axios from 'axios'
import { GET_ALL_BUSINESS, SET_PAGINATION, GET_ALL_CATEGORIES, GET_ALL_USERS } from './Action-Types'
import type { ServiceAction } from './types'

const API_URL = 'http://localhost:3001/'

export const GetAllBusiness = (): (dispatch: (action: ServiceAction) => void) => Promise<void> => {
  const endpoint = `${API_URL}sellers`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endpoint)
      console.log('Hoola', data)

      return dispatch({
        type: GET_ALL_BUSINESS,
        payload: data
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }
}


export const setPages = (pages: number): {
  type: string
  payload: number
} => {
  return {
    type: SET_PAGINATION,
    payload: pages
  }
}

export const getCategories = (): (dispatch: (action: ServiceAction) => void) => Promise<void> => {
  const endCategorie = `${API_URL}categories`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endCategorie)

      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: data
      })
    } catch (error: any) {
      console.log('Error en el getCategories')
    }
  }
}

export const postSeller = (payload: any) => {
  const endpoint = `${API_URL}sellers`

  return async function (dispatch: any) {
    let json = await axios.post(endpoint, payload)
    return json
  }
}

export const postUser = (payload: any) => {
  const endpoint1 = `${API_URL}users`
  return async function (dispatch: any) {
    let json1 = await axios.post(endpoint1, payload)
    return json1
  }
}

export const getUsers = (): (dispatch: (action: ServiceAction) => void) => Promise<void> => {
  const endUser = `${API_URL}users`

  return async (dispatch: (action: ServiceAction) => void) => {
    try {
      const { data } = await axios.get(endUser)

      return dispatch({
        type: GET_ALL_USERS,
        payload: data
      })
    } catch (error: any) {
      console.log('Error en el getUsers')
    }
  }
}
