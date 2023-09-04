// import type { GET_ALL_BUSINESS, SET_PAGINATION } from './Action-Types'

export interface ServiceAction {
  type: any
  payload: any
}

export interface RootState {
  allServices: any[]
  categories: any[]
  users: any[]
  filter: string
  rating: number
  image: string | undefined
}
