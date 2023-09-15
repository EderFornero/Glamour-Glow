import type { ServiceProvider } from './index'

export interface CardsProps {
  allServices: ServiceProvider[]
}

export interface SearchBarProps {
  onSearch: (query: string) => void
  updateShowCards: (hasQuery: boolean) => void
}

export interface SearchResultsProps {
  searchResults: ServiceProvider[]
  handleOnSearch: (query: string) => void
}

export interface UserCardProps {
  name: string
  lastName: string
  email: string
  image: string
  _id: string
  phoneNumber: string
  dateOfBirth: string
  isActive: boolean
  role: string
  createdAt: string
}
