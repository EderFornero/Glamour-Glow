import { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'
import type { ServiceAction, RootState } from './types'

const initialState: RootState = {
  allServices: []
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
    default:
      return state
  }
}

export default reducer
