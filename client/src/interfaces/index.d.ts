export interface ServiceProvider {
  _id: string | ''
  sellerName: string | ''
  sellerEmail: string | ''
  sellerPhone: string | ''
  sellerGender: string | ''
  reviews: ReviewType[] | []
  categoriesArray: Category[] | []
  servicesArray: Service[] | []
}

export interface ReviewRating {
  rating: number
}
export interface ReviewType extends ReviewRating {
  description: string
  userId: UserId
}

export interface Category {
  name: string
}

export interface Service {
  id: number
  name: string
  description: string
  category: string
  price: number
  sellerId: string
}

export interface UserId {
  name: string
  lastName: string
  image: string
}

export interface FormData {
  name: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  role: 'customer' | 'seller'
  dateOfBirth: string
  image: string
  isActive: boolean
  confirmPassword?: string
}

export interface FormCreateBusi {
  sellerName: string
  sellerEmail: string
  sellerPhone: string
  sellerGender: 'male' | 'female' | 'any'
  categoriesArray: string[]
  servicesArray: string[]
}

export interface FormLoginData {
  email: string
  password: string
}
export interface SellerData {
  name: string
  description: string
  serviceCategories: string
  price: number
  rating: number
  seller: string
}

export interface SellerDetailAction {
  type: string
  payload: ServiceProvider
}

export interface SellerLoginData {
  sellerEmail: string
  sellerPassword: string
}
