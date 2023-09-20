import {
  GET_ALL_BUSINESS,
  GET_ALL_CATEGORIES,
  GET_ALL_USERS,
  SET_FILTERS,
  SET_RATING,
  SET_UPLOAD_IMAGE,
  GET_USER_BY_ID,
  UPDATE_USER_DETAIL,
  GET_SELLER_BY_ID,
  UPDATE_SELLER_DETAIL,
  SET_AUTH,
  SET_USER_ID,
  CLEAN_SELLER_DETAIL,
  UPDATE_SELLER_IMAGE_INDEX,
  GET_USER_METRICS,
  GET_SELLER_METRICS,
  UPDATE_SELLER_BALANCE,
  SELLER_EMAIL,
  POST_SERVICES,
  PUT_SERVICES,
  SEE_REPORTS,
  DELETE_SERVICES,
  SEE_PAYMENTS
} from './Action-Types'
import type { ServiceAction, RootState, UserDetail, SellerDetail } from './types'

export const initialState: RootState = {
  allServices: [],
  categories: [],
  users: [],
  userMetrics: [],
  payments: [],
  sellerMetrics: [],
  accountBalance: 0,
  sellerEmail: '',
  reports: [],
  userdetail: {
    _id: '',
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
    dateOfBirth: '',
    image: '',
    isActive: false,
    favorites: []
  },
  sellerdetail: {
    _id: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
    sellerGender: '',
    reviews: [],
    categoriesArray: [],
    servicesArray: [],
    images: []
  },
  filter: 'none',
  rating: 0,
  image: undefined,
  isAuth: false,
  userId: null,
  sellerImageIndex: 0
}

const reducer = (
  state = initialState,
  action: ServiceAction
): {
  allServices: any[]
  categories: any[]
  users: any[]
  payments: any[]
  userMetrics: any[]
  sellerMetrics: any[]
  sellerEmail: string
  reports: any[]
  userdetail: UserDetail
  sellerdetail: SellerDetail
  accountBalance: number
  filter: string
  rating: number
  image: string | undefined
  isAuth: false
  userId: null
  sellerImageIndex: number
} => {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return { ...state, allServices: [...action.payload] }

    case SET_FILTERS:
      return { ...state, filter: action.payload }

    case SET_RATING:
      return { ...state, rating: action.payload }

    case SET_UPLOAD_IMAGE:
      return { ...state, image: action.payload }

    case GET_ALL_CATEGORIES:
      return { ...state, categories: action.payload }

    case GET_ALL_USERS:
      return { ...state, users: action.payload }

    case GET_USER_BY_ID:
      return { ...state, userdetail: action.payload }

    case UPDATE_USER_DETAIL:
      return { ...state, userdetail: action.payload }

    case GET_SELLER_BY_ID:
      return { ...state, sellerdetail: action.payload }

    case UPDATE_SELLER_DETAIL:
      return { ...state, sellerdetail: action.payload }

    case SET_AUTH:
      return { ...state, isAuth: action.payload }

    case SET_USER_ID:
      return { ...state, userId: action.payload }

    case CLEAN_SELLER_DETAIL:
      return { ...state, sellerdetail: action.payload }

    case UPDATE_SELLER_IMAGE_INDEX:
      return { ...state, sellerImageIndex: action.payload }

    case GET_USER_METRICS:
      return { ...state, userMetrics: action.payload }

    case GET_SELLER_METRICS:
      return { ...state, sellerMetrics: action.payload }

    case UPDATE_SELLER_BALANCE:
      return { ...state, accountBalance: action.payload }

    case SELLER_EMAIL:
      return { ...state, sellerEmail: action.payload }

    case SEE_REPORTS:
      return { ...state, reports: action.payload }

    case SEE_PAYMENTS:
      return { ...state, payments: action.payload }

    case POST_SERVICES:
      return { ...state }

    case PUT_SERVICES:
      return { ...state }

    case DELETE_SERVICES:
      return { ...state }

    default:
      return state
  }
}

export default reducer
