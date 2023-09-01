import axios from 'axios'
import { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'
import type { ServiceAction } from './types'

const API_URL = 'http://localhost:3001/'

const GetAllBusiness = (): (dispatch: (action: ServiceAction) => void) => Promise<void> => {
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

export default GetAllBusiness

export const setPages = (pages: number): {
  type: string
  payload: number
} => {
  return {
    type: SET_PAGINATION,
    payload: pages
  }
}
