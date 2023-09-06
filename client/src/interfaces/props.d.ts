import type { ServiceProvider } from './index'

export interface CardsProps {
  searchUsers: ServiceProvider[]
}

export interface SearchBarProps {
  onSearch: (query: string) => void
  updateShowCards: (hasQuery: boolean) => void
}

export interface SearchResultsProps {
  searchResults: ServiceProvider[]
  handleOnSearch: (query: string) => void
}
