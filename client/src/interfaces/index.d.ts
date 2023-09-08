export interface ServiceProvider {
  _id: string;
  sellerName: string;
  sellerEmail?: string;
  sellerPhone?: string;
  sellerGender?: string;
  reviews?: any;
  categoriesArray: Category[];
  servicesArray: any[];
}

export interface Category {
  name: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  time?: string;
}

export interface FormData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: "customer" | "seller";
  dateOfBirth: string;
  image: string;
  isActive: boolean;
  confirmPassword?: string;
}

export interface FormCreateBusi {
  sellerName: string;
  sellerEmail: string;
  sellerPhone: string;
  sellerGender: "male" | "female" | "any";
  categoriesArray: string;
  servicesArray: string[];
}

export interface FormLoginData {
  email: string;
  password: string;
}
export interface SellerData {
  name: string;
  description: string;
  serviceCategories: string;
  price: number;
  rating: number;
  seller: string;
}
