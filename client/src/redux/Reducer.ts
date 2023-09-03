import { GET_ALL_BUSINESS, SET_PAGINATION, GET_ALL_CATEGORIES, GET_ALL_USERS } from './Action-Types'
import type { ServiceAction, RootState } from './types'

const initialState: RootState = {
  allServices: [],
  categories: [],
  users: []
};

const reducer = (state = initialState, action: ServiceAction) => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return {
        ...state,
        allServices: [...action.payload]
      }

    case SET_PAGINATION:
      return {
        ...state,
        pages: action.payload
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
