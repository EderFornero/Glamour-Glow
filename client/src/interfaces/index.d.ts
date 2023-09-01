export interface ServiceProvider {
  id: number;
  businessName: string;
  businessLocation: string;
  rating: number;
  categories: string[];
  services: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface FormData {
  name: string;
  userName: string;
  email: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  country: string;
  acceptTerms: boolean;
}
