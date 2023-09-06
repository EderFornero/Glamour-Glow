// import type { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'

export interface ServiceAction {
  type: any
  payload: any
}

export interface RootState {
  allServices: any[]
  categories: any[]
  users: any[]
  userdetail: any
  filter: string
  rating: number
  image: string | undefined
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
