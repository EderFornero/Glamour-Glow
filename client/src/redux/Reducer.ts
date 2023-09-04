import { GET_ALL_BUSINESS, GET_ALL_CATEGORIES, GET_ALL_USERS, SET_FILTERS, SET_RATING, SET_UPLOAD_IMAGE } from './Action-Types'
import type { ServiceAction, RootState } from './types'

const initialState: RootState = {
  allServices: [],
  categories: [],
  users: [],
  filter: 'none',
  rating: 0,
  image: undefined
}

const reducer = (state = initialState, action: ServiceAction): {
  allServices: any[]
  categories: any[]
  users: any[]
  filter: string
  rating: number
  image: string | undefined
} => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return {
        ...state,
        allServices: [...action.payload]
      }

    case SET_FILTERS:
      return {
        ...state,
        filter: action.payload
      }
    case SET_RATING:
      return {
        ...state,
        rating: action.payload
      }

    case SET_UPLOAD_IMAGE:
      return {
        ...state,
        image: action.payload
      }

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

export default reducer
