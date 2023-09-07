// import type { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'

export interface ServiceAction {
  type: any
  payload: any
}

export interface RootState {
  allServices: any[]
  categories: any[]
  users: any[]
  userdetail: object
  sellerdetail: object
  filter: string
  rating: number
  image: string | undefined
  isAuth: boolean
  userId: any
}

export interface UserDetail {
  _id: string
  name: string
  last_name: string
  email: string
  phone_number: string
  role: string
  date_of_birth: string
  image: string
  isActive: boolean
}

export interface SellerDetail {
  _id: string
  seller_name: string
  seller_email: string
  seller_phone: string
  seller__gender: string
  reviews: any[]
  categoriesArray: any[]
  servicesArray: []
}
