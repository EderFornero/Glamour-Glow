export interface ServiceProvider {
  id: number;
  businessName: string;
  businessLocation: string;
  rating: number;
  categories: string[];
  services: Service[];
}

export interface Service {
  id: number
  name: string
  description: string
  category: string
  price: number
  time?: string
}

export interface FormData {
  username: string
  fullname: string
  email: string
  password: string
  role: 'customer' | 'seller'
  date_of_birth: string
  image: string
  isActive: boolean
  confirmPassword?: string
}

export interface FormCreateBusi {
  seller_name: string
  seller_email: string
  seller_phone: string
  seller_gender: 'male' | 'female' | 'any'
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
