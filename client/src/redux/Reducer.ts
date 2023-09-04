import { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'
import type { ServiceAction, RootState } from './types'

const initialState: RootState = {
  allServices: [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      role: 'seller',
      birthdate: '1990-05-15',
      full_name: 'John Doe',
      location: 'New York, NY',
      rating: 2,
      img: 'user1.jpg',
      business_name: "John's Hair Studio",
      business_email: 'johnshair@example.com',
      business_phone: '123-456-7890',
      business_location: 'Downtown, NY',
      business_gender: 'both'
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      role: 'seller',
      birthdate: '1985-08-20',
      full_name: 'Sarah Smith',
      location: 'Los Angeles, CA',
      rating: 2,
      img: 'user2.jpg',
      business_name: "Sarah's Salon",
      business_email: 'sarahsalon@example.com',
      business_phone: '987-654-3210',
      business_location: 'Suburbia, CA',
      business_gender: 'female'
    }
  ],
  pages: 0
}

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
