// import type { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'

export interface ServiceAction {
  type: string
  payload: any
}

export interface RootState {
  allServices: any[]
  categories: any[]
  users: any[]
  userMetrics: any
  sellerMetrics: any
  userdetail: UserDetail
  sellerdetail: SellerDetail
  filter: string
  rating: number
  image: string | undefined
  isAuth: any
  userId: null
  sellerImageIndex: number
}

export interface UserDetail {
  _id: string
  name: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
  dateOfBirth: string
  image: string
  isActive: boolean
  favorites: any[]
}

export interface SellerDetail {
  _id: string
  sellerName: string
  sellerEmail: string
  sellerPhone: string
  sellerGender: string
  reviews: any[]
  categoriesArray: any[]
  servicesArray: any[]
  images: string[]
}
