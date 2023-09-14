import { useState } from 'react'
import type { ServiceProvider } from '../interfaces'
import type { SearchResultsProps, SearchBarProps } from '../interfaces/props'

export const useSearchBarInOwnComponent = ({
  onSearch
}: SearchBarProps): {
    searchQuery: string
    handleOnSearch: (query: string) => void
  } => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleOnSearch = (query: string): void => {
    setSearchQuery(query)
    onSearch(query)
  }
  return {
    searchQuery,
    handleOnSearch
  }
}

export const useSearchBarHome = (allservices: any): SearchResultsProps => {
  const [searchResults, setSearchResults] = useState<ServiceProvider[]>([])

  const handleOnSearch = (query: string): void => {
    const filteredResults = allservices.filter((seller: any) =>
      seller !== undefined && seller.sellerName.toLowerCase().includes(query.toLowerCase()))
    setSearchResults(filteredResults)
  }

  return {
    searchResults,
    handleOnSearch
  }
}
