export interface ServiceProvider {
  sellerId?: number
  serviceId?: number
  price: number
  rating: number
  categoryId: number
  sellerName: string
  serviceDescription: string
}

export interface FormData {
  name: string
  email: string
  birthDate: string
  password: string
  confirmPassword: string
  country: string
  acceptTerms: boolean
}
