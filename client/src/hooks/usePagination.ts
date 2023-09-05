import { useState } from 'react'

export const usePagination = (items: any, itemsPerPage: number): any => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const itemsPaginated = items.slice(startIndex, endIndex)

  const nextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToFirst = (): void => {
    setCurrentPage(0)
  }
  const goToLast = (): void => {
    setCurrentPage(totalPages - 1)
  }

  return {
    itemsPaginated,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToFirst,
    goToLast
  }
}
