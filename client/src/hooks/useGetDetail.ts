import { useMemo } from 'react'
import { users } from '../../../mocks/fullAPIresponse.json'
import type { Service } from '../interfaces'

export interface User {
  id: number
  username: string
  email: string
  role: Role
  birthdate: Date
  fullName: string
  location: Location
  img: string
  businessName: string
  businessEmail: string
  businessPhone: string
  businessLocation: Location
  businessGender: BusinessGender
  categories: string[]
  rating: number
  services: Service[]
}

export enum Location {
  ChicagoIL = 'Chicago, IL',
  LosAngelesCA = 'Los Angeles, CA',
  MiamiFL = 'Miami, FL',
  NewYorkNY = 'New York, NY',
}

export enum Role {
  Seller = 'seller',
}

export enum BusinessGender {
  Female = 'female',
  Male = 'male',
}

const useGetDetail = (id: number): any => {
  const usuario = useMemo(() => {
    return users.find((user) => user.id === id)
  }, [id])
  return usuario
}

export default useGetDetail
